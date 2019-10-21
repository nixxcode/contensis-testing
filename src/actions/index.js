import { fetchArticles } from "../apis/contensis";

export const loadArticles = () => async dispatch => {
  const articles = await fetchArticles();

  dispatch({ type: "LOAD_ARTICLES", payload: articles });
};
