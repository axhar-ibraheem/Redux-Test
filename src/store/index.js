import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

///counter slice///
const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

///--end of counter slice--///

///---authslice--///

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - action.value,
//     };
//   } else if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const { increment, decrement, toggle } = counterSlice.actions;
export const { login, logout } = authSlice.actions;
export default store;
