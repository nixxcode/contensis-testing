import React, { useEffect, Fragment } from "react";

import Header from "./Header";
import GlobalStyle from "../styles/GlobalStyle";
import Main from "./Main";
import Footer from "./Footer";

const App = ({ articles, loadArticles }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main articles={articles} />
      <Footer />
    </Fragment>
  );
};

export default App;
