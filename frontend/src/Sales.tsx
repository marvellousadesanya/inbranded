import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useGetSalesQuery } from "./app/api/apiSlice";
import {
  useAddSaleMutation,
  useDeleteRowMutation,
  // useAddColumnMutation,
} from "./app/api/apiSlice";

const socket = io("http://localhost:7000");

interface Sale {
  id: number;
  // date: number;
  customer_name: string;
  quantity: number;
  item_sold: number;
  unit_price: number;
}

const Sales = () => {
  const { data: sales = [] } = useGetSalesQuery(); // Calling the sales data from API
  const [addSale] = useAddSaleMutation(); // Adds new row of sales to table

  const [deleteRow] = useDeleteRowMutation(); // Removes a row of sales from table

  // const [addColumn] = useAddColumnMutation();  Not implemented on FE yet. Works in BE

  /* This manages the state esp for the socket.io emits */
  const [receivedSales, setReceivedSales] = useState<Sale[]>(sales);

  useEffect(() => {
    if (sales.length > 0) {
      setReceivedSales(sales);
    }
  }, [sales]);

  /* This makes the initial state of the input fields empty but
  does not transmit or update to Backend */
  const [newSale, setNewSale] = useState<Sale>({
    id: 0,
    customer_name: "",
    quantity: 0,
    item_sold: 0,
    unit_price: 0,
  });

  /* Basically just emits the current state of sales to other clients */
  useEffect(() => {
    socket.emit("new-sale", sales);
  }, [sales]);

  /* Once the state has been emitted, this hook updates the UI */
  useEffect(() => {
    socket.on("new-sale", (updatedData: Sale[]) => {
      // socket.emit("new-sale", updatedData);
      setReceivedSales(updatedData);
      console.log(updatedData);
    });
    return () => {
      socket.off("new-sale");
    };
  }, []);

  /* Func to add a new row of sales */
  const handleNewSale = async () => {
    try {
      const saleMade = await addSale(newSale).unwrap();
      console.log(saleMade);
      // const updatedData = [...sales, saleMade];

      setReceivedSales(sales);
      setNewSale({
        id: 0,
        customer_name: "",
        quantity: 0,
        item_sold: 0,
        unit_price: 0,
      });
      setReceivedSales(sales);
    } catch (error) {
      console.error("Error adding new sale:", error);
    }
  };

  /* Deletes a row of sales */
  const handleDeleteRow = async (id: number) => {
    try {
      await deleteRow(id);
      // await socket.emit("new-sale", sales);
      setReceivedSales(sales);
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Sale
  ) => {
    const { value } = event.target;
    setNewSale((prevSale) => ({
      ...prevSale,
      [field]: value,
    }));
  };

  return (
    <div>
      <h1>Sales Record</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Quantity</th>
            <th>Item Sold</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {sales && sales.length > 0 ? (
            receivedSales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.id}</td>
                <td>{sale.customer_name}</td>
                <td>{sale.quantity}</td>
                <td>{sale.item_sold}</td>
                <td>{sale.unit_price}</td>
                <td>
                  <button onClick={() => handleDeleteRow(sale.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          )}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={newSale.customer_name}
                onChange={(e) => handleInputChange(e, "customer_name")}
              />
            </td>

            <td>
              <input
                type="number"
                value={newSale.quantity}
                onChange={(e) => handleInputChange(e, "quantity")}
              />
            </td>
            <td>
              <input
                type="number"
                value={newSale.item_sold}
                onChange={(e) => handleInputChange(e, "item_sold")}
              />
            </td>
            <td>
              <input
                type="number"
                value={newSale.unit_price}
                onChange={(e) => handleInputChange(e, "unit_price")}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleNewSale}>Add New Sale</button>
    </div>
  );
};

export default Sales;
