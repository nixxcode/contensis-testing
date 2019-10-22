import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import entriesReducer from "./entriesReducer";

export default combineReducers({
  articles: articlesReducer,
  entries: entriesReducer
});
