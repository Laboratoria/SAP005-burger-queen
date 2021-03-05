import { combineReducers } from "redux";
import OrderReducer from "./OrderReducer";

export default combineReducers({
  order: OrderReducer,
});
