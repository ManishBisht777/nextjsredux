import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import counter from "./counterSlice";

const combinedReducer = combineReducers({
  counter,
});

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nxtstate = {
//       ...state,
//       counter: {
//         count: state.counter.count + action.payload.counter.count,
//       },
//     };
//     return nxtstate;
//   } else return combinedReducer({ state, action });
// };

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
