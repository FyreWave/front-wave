import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user:
    | {
        email: string;
        lastSeen: string;
        username: string;
      }
    | {};
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: {
    email: "",
    lastSeen: "",
    username: "",
  },
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut, hasError, startLoading } = userSlice.actions;

export default userSlice.reducer;
