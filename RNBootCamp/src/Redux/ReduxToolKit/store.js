import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import accountBlcReducer from './balanceSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: accountBlcReducer,
  },
});