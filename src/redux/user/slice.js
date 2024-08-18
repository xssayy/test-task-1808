import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    favCampers: [],
  },
  reducers: {
    addToFavList(state, action) {
      const camper = action.payload;
      state.favCampers.push(camper);
    },
    removeFromFavList(state, action) {
      const camperId = action.payload;
      state.favCampers = state.favCampers.filter(
        (camper) => camper._id !== camperId
      );
    },
  },
});

export const { addToFavList, removeFromFavList } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
