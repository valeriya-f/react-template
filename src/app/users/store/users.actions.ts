import { Action, AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";

import { UserDto } from "app/users/types/user-dto.type";
import repository from "repository";
import { usersSlice } from "./users.slice";

export const getUsers = createAsyncThunk<UserDto[]>("GET/users", async (_, { rejectWithValue }) => {
  try {
    const response = await repository.get("/users");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const getUser = createAsyncThunk<UserDto, { userId: string }>("GET/users/:userId", async ({ userId }, { rejectWithValue }) => {
  try {
    const response = await repository.get(`/users/${userId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const { } = usersSlice.actions;