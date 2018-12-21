import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import FeedReducer from "./FeedReducer";

export default combineReducers({
  search: SearchReducer,
  feed: FeedReducer
});
