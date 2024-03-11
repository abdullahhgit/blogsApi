// store.js
import { configureStore } from '@reduxjs/toolkit';
import viewsReducer from './ViewsSlice';

const store = configureStore({
  reducer: {
    views: viewsReducer,
    // Add other reducers here if any
  },
});

export default store;
