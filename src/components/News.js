import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadArticles } from "../actions";
import Article from "./Article";

const News = ({ articles, loadArticles }) => {
  useEffect(() => {
    loadArticles();
    console.log(articles);
  }, []);

  const articlesJSX = articles.map(article => {
    console.log(article.sys.id);
    return (
      <Article
        key={article.sys.id}
        title={article.title}
        content={article.content}
        author={article.author}
        dateTime={article.dateTime}
      />
    );
  });

  return (
    <div className="News">
      <h1>News</h1>
      {articlesJSX}
    </div>
  );
};

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default connect(
  mapStateToProps,
  { loadArticles }
)(News);
