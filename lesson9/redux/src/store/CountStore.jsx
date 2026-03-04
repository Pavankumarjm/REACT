import { legacy_createStore as createStore } from "redux";
import counterReducer from "./CounterReducers";
const store = createStore(counterReducer);

export default store;