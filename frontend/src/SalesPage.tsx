/* TEST PAGE: IGNORE */

import { io } from "socket.io-client";

const socket = io("http://localhost:7000");

socket.on("chat message", (message) => {
  console.log(message);
  socket.emit("chat message", message);
});

const tableData = [
  {
    id: 1,
    customerName: "John Doe",
    quantity: 5,
    unitPrice: 10,
    itemsSold: 8,
    date: "May 12",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    quantity: 3,
    unitPrice: 15,
    itemsSold: 3,
    date: "May 13",
  },
  // Add more data rows here
];

const Table = ({ data = tableData }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Item Sold</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Add Column</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>A day</td>
            <td>{row.customerName}</td>
            <td>{row.itemsSold}</td>
            <td>{row.quantity}</td>
            <td>N{row.unitPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
