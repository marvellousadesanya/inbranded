import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* Sale type */
interface Sale {
  id: number;
  date: Date;
  customer_name: string;
  item_sold: number;
  quantity: number;
  unit_price: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/" }),
  tagTypes: ["Sale"],
  endpoints: (builder) => ({
    getSales: builder.query<Sale[], void>({
      query: () => "/sales",
      // Not been able to figure this error out yet
      providesTags: (id) => [{ type: "Sale", id }],
    }),
    addSale: builder.mutation({
      query: (sale) => ({
        url: "/sales",
        method: "POST",
        body: sale,
      }),

      invalidatesTags: ["Sale"],
    }),
    deleteRow: builder.mutation({
      query: (saleId) => ({
        url: `/sales/${saleId}`,
        method: "DELETE",
        // body: sale,
      }),
      invalidatesTags: ["Sale"],
    }),
    addColumn: builder.mutation({
      query: () => ({
        url: "/add-column",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetSalesQuery,
  useAddSaleMutation,
  useDeleteRowMutation,
  useAddColumnMutation,
} = apiSlice;
