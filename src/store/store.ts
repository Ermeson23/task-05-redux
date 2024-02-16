
import { configureStore } from '@reduxjs/toolkit';
import { reqApi } from './api/reqres';
import { setupListeners } from '@reduxjs/toolkit/query/react';
export const store = configureStore({
    reducer: {
        [reqApi.reducerPath]: reqApi.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reqApi.middleware),
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;