import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookData } from './book';

export interface CartItem {
  product: BookData;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.product.isbn13 === action.payload.product.isbn13);
    
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    }
    ,
    addByUnity(state, action: PayloadAction<{ productIsbn: string, quantity: number }>) {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.product.isbn13 === action.payload.productIsbn && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity
            };
          }
          return item;
        })
      };
    },
    removeByUnity(state, action: PayloadAction<{ productIsbn: string, quantity: number }>) {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.product.isbn13 === action.payload.productIsbn && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - action.payload.quantity
            };
          }
          return item;
        })
      };
    },
    removeItemCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.product.isbn13 !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, addByUnity, removeItemCart, removeByUnity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;