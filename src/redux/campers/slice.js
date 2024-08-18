import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    hasLoaded: false,
    totalCount: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasLoaded = true;
        state.items = [...state.items, ...action.payload.data];
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
