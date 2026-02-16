import { configureStore } from '@reduxjs/toolkit';

// Example slice (replace with your own)
import featureReducer from './featureSlice';

const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
});

export default store;
