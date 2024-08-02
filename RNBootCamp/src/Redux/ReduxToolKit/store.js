import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import accountBlcReducer from './balanceSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: accountBlcReducer,
  },
});
