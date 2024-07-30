import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 10000,
  },
  reducers: {
    deposit: (state) => {
      state.value += 10;
    },
    withdraw: (state) => {
      state.value -= 10;
    },
    
  }, 
});

export const { deposit,withdraw } = balanceSlice.actions;

export const totalBlc = (state) => state.balance.value;

//export const selectItem = (state) => state.counter.item;

export default balanceSlice.reducer;