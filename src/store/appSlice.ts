import { createSlice } from '@reduxjs/toolkit';
import routes from '../constants/routes';
import { IRoute } from './interfaces';

export interface IAppState {
  title: string;
  routes: IRoute[];
}

const initialState: IAppState = {
  title: 'Content App',
  routes,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
