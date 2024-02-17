import { configureStore } from '@reduxjs/toolkit';
import { reqApi } from './api/reqres';
import { bookApi } from './api/book';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
    reducer: {
        [reqApi.reducerPath]: reqApi.reducer,
        [bookApi.reducerPath]: bookApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reqApi.middleware, bookApi.middleware),
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;