import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const DEFAULT_ACTIVE_ITEM = "about";

interface NavState {
  active: string;
}

const initialState: NavState = {
  active: DEFAULT_ACTIVE_ITEM,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = navSlice.actions;

export const selectActive = (state: RootState) => state.nav.active;

export default navSlice.reducer;
