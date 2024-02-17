import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BookData {
    title: string;
    subTitle?: string;
    isbn13: string;
    price: number;
    image: string;
    url: string;
}

export const bookApi = createApi({
    reducerPath: "bookApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.itbook.store/1.0/" }),
    endpoints: (builder) => ({
        getBook: builder.query<BookData[], void>({
            query: () => "new",
        }),
    }),
});

export const { useGetBookQuery } = bookApi;
