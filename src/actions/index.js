import { fetchArticles, fetchEntries } from "../apis/contensis";

export const loadArticles = () => async dispatch => {
  const articles = await fetchArticles();

  dispatch({ type: "LOAD_ARTICLES", payload: articles });
};

export const loadEntries = () => async dispatch => {
  const entries = await fetchEntries();
  //console.log(entries);

  dispatch({ type: "LOAD_ENTRIES", payload: entries });
};
