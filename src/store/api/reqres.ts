import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginCredentials {
  email: string;
  password: string;
}
interface RegisterCredentials {
  email: string;
  password: string;
}

export const reqApi = createApi({
  reducerPath: 'reqApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginCredentials, Partial<LoginCredentials>>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<RegisterCredentials, Partial<RegisterCredentials>>({
      query: (credentials) => ({
        url: 'register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = reqApi;