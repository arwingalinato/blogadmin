import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './appSlice';
import { postSlice } from './postSlice';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    post: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
