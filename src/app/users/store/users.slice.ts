import { createSlice } from "@reduxjs/toolkit";

import { UserState } from "app/users/types/user-state.type";

const initialState: UserState = {
  users: [],
  user: null,
  pending: {
    users: false,
    user: false,
  },
  errors: {
    users: null,
    user: null,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;
