import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserDto } from "app/users/types/user-dto.type";

export const getUsers = createAsyncThunk<UserDto[]>("GET/users", async (_, { rejectWithValue }) => {
  try {
    const response = await repo.get("/users");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(validateServerError(error));
  }
});

export const getUser = createAsyncThunk<UserDto, { userId: string }>("GET/user/:userId", async ({ userId }, { rejectWithValue }) => {
  try {
    const response = await repo.get(`/users/${userId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(validateServerError(error));
  }
});