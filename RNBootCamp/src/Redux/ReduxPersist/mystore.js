import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import accountBlcReducer from '../ReduxToolKit/balanceSlice';
//import storage from 'redux-persist/lib/storage';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';


//const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local')

// adding our persist configs
const persistConfig = {
  key: 'root',
  storage,
};


// adding our rootReducer
const rootReducer = combineReducers({
  balance: accountBlcReducer,
  
});

// persisting our rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating our store and exporting it
export const mystore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});