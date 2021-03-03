import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import OrderReducer from "./OrderReducer";

export default combineReducers({
    user: UserReducer,
    order: OrderReducer,
});