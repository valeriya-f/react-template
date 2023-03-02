import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "app/users/store/users.slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
