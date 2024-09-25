import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  name: "cart",
  initialState: {
    items: ["burger","dosa"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = sliceCart.actions;

export default sliceCart.reducer;
