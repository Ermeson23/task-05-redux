import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reqApi } from './api/reqres';
import { bookApi } from './api/book';
import cartReducer from './api/cartSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';
import purchaseHistorySliceReducer from './api/historySlice'

const rootReducer = combineReducers({
    [reqApi.reducerPath]: reqApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    cart: cartReducer,
    history: purchaseHistorySliceReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'history']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reqApi.middleware, bookApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;