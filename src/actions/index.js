import { fetchArticles, fetchEntry } from "../apis/contensis";

export const loadArticles = () => async dispatch => {
  const articles = await fetchArticles();

  dispatch({ type: "LOAD_ARTICLES", payload: articles });
};

export const loadEntry = slug => async dispatch => {
  const entry = await fetchEntry(slug);
  //console.log(entry);

  dispatch({ type: "LOAD_ENTRY", payload: entry });
};
