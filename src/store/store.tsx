/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 *  ストア
 *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";

import todosReducer from "./modules/redux_toolkit";
import abcdReducer from "./modules/abcdSlice";

// Reducerを増やすときは、ここに追加
const rootReducer = combineReducers({
  todos: todosReducer,
  abcd: abcdReducer,
});

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

// states type
export type RootState = ReturnType<typeof rootReducer>; // ReturnType<typeof fn>は、fnの返り値の型

// store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
