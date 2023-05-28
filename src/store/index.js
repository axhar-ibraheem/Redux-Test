import { createStore } from "redux";

const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "incrementbytwo") {
    return {
      ...state,
      counter: state.counter + 2,
    };
  } else if (action.type === "decrementbytwo") {
    return {
      ...state,
      counter: state.counter - 2,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
