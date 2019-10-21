import React from "react";
import styled from "styled-components/macro";

const ArticleStyled = styled.div`
  .meta .date_time {
    float: right;
  }

  hr,
  pre {
    margin-top: 2rem;
  }

  pre {
    white-space: pre-line;
    font-size: 1.2rem;
  }
`;

const Article = ({ title, content, author, dateTime }) => {
  return (
    <ArticleStyled className="article">
      <h2>{title}</h2>
      <div className="meta">
        <span className="author">Posted by: {author}</span>
        <span className="date_time">{dateTime}</span>
      </div>
      <pre>{content}</pre>
      <hr />
    </ArticleStyled>
  );
};

export default Article;
