import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: Number(10000),
  },
  reducers: {
    deposit: (state,action) => {
      state.value += Number  (action.payload);
    },
    withdraw: (state,action) => {
      state.value -= Number(action.payload);
    },
    
  }, 
});

export const { deposit,withdraw } = balanceSlice.actions;

export const totalBlc = (state) => state.balance.value;

export default balanceSlice.reducer;