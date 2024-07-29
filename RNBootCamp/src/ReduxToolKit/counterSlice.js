import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    item:"Kiran",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiply: (state) => {
        state.value *=2;
    },
    itemRed:(state) => {
        const aplsbet = 'ABCD'
        let add='';
        for (let index = 0; index < 1; index++) {
            add += aplsbet[Math.floor(Math.random()*4)]
            
        }
        state.item +=add;
    },
  },
});

export const { increment, decrement, multiply, itemRed } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const selectItem = (state) => state.counter.item;

export default counterSlice.reducer;