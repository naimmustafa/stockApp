import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import FeedReducer from "./FeedReducer";
import UserAssetsReducer from "./UserAssetsReducer";

export default combineReducers({
  search: SearchReducer,
  feed: FeedReducer,
  assets: UserAssetsReducer
});
