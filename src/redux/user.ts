import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
}

const initialState: UserState = {
  username: "mary",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logOut: (state) => {
      state.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logOut } = userSlice.actions;

export default userSlice.reducer;
