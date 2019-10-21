import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Article from "./Article";
import Home from "./Home";
import News from "./News";
import NotFound from "./NotFound";

const MainStyled = styled.main`
  padding: 2rem 4rem;
`;

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route component={NotFound} />
      </Switch>
    </MainStyled>
  );
};

export default Main;
