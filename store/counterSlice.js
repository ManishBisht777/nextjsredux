import { HYDRATE, createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
