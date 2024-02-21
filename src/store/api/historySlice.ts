import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PurchaseItem {
  title: string;
  quantity: number;
}

export interface PurchaseHistoryState {
  purchases: PurchaseItem[]; // Atualize o tipo aqui
}

const initialState: PurchaseHistoryState = {
  purchases: [],
};

const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<PurchaseItem[]>) { // Atualize o tipo do payload aqui
      state.purchases.push(...action.payload);
      console.log('Compra adicionada ao histórico:', action.payload);
    },
    clearHistory(state) {
      state.purchases = [];
    },
  },
});

export const { addToHistory, clearHistory } = purchaseHistorySlice.actions;
export default purchaseHistorySlice.reducer;