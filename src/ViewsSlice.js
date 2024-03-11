// viewsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const ViewsSlice = createSlice({
  name: 'views',
  initialState: {},
  reducers: {
    incrementViews(state, action) {
      const { blogId } = action.payload;
      if (state[blogId]) {
        state[blogId]++;
      } else {
        state[blogId] = 1;
      }
    },
  },
});

export const { incrementViews } = ViewsSlice.actions;
export default ViewsSlice.reducer;
