import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    favCampers: [],
  },
  reducers: {
    addToFavList(state, action) {
      const camper = action.payload;
      state.selectAllFavCampers.push(camper);
    },
    removeFromFavList(state, action) {
      const camperId = action.payload;
      state.selectAllFavCampers = state.selectAllFavCampers.filter(
        (camper) => camper._id !== camperId
      );
    },
  },
});

export const { addToFavList, removeFromFavList } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
