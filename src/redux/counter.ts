import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
  menuState: boolean;
}

const initialState: CounterState = {
  counter: 0,
  menuState: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    toggleMenu: (state) => {
      state.menuState = !state.menuState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toggleMenu } =
  counterSlice.actions;

export default counterSlice.reducer;
