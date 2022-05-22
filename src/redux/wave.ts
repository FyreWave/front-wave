import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  wave: {} | {};
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  wave: {},
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

export const waveSlice = createSlice({
  name: "wave",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    setWave: (state, action: PayloadAction<any>) => {
      state.wave = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWave } = waveSlice.actions;

export default waveSlice.reducer;
