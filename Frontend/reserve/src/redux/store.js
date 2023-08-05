import { combineReducers, createStore } from "redux";
import busReducer from "./busReducer";

const rootReducers = combineReducers({ bus: busReducer });

const store = createStore(rootReducers);
export default store;
