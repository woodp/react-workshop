import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    user: undefined,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated'
      state.user = payload
    },
    logout: (state) => {
      state.status = 'not-authenticated'
      state.user = undefined
    },
  }
});

export const { login, logout } = authSlice.actions;