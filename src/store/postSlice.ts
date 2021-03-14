import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../api';
import { IPost } from './interfaces';

export const getAllPosts = createAsyncThunk(
  'post/getPosts',
  async () => {
    const response = await axios.get('/posts');
    return response.data;
  },
);

export interface IPostState {
  list: IPost[];
  loading: boolean;
  error: boolean;
}

const initialState: IPostState = {
  list: [],
  loading: false,
  error: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.list = action.payload.result;
    });
  },
});

export default postSlice.reducer;
