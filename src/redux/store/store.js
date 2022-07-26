import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stocksReducer from '../features/stocksSlice';

const reducer = combineReducers({
  stocks: stocksReducer,
});

const store = configureStore({ reducer });

export default store;
