import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import entryReducer from "./entryReducer";

export default combineReducers({
  articles: articlesReducer,
  entry: entryReducer
});
