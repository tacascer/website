import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from "@/components/navbar/navSlice";

const store = configureStore({
  reducer: {
    [navSlice.name]: navSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
