import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 10000,
  },
  reducers: {
    deposit: (state,action) => {
      state.value += action.payload;
    },
    withdraw: (state,action) => {
      state.value -= action.payload;
    },
    
  }, 
});

export const { deposit,withdraw } = balanceSlice.actions;

export const totalBlc = (state) => state.balance.value;

export default balanceSlice.reducer;