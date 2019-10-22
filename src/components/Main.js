import React from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import News from "./News";
import EntryHandler from "./EntryHandler";

const MainStyled = styled.main`
  padding: 2rem 4rem;
`;

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route component={EntryHandler} />
      </Switch>
    </MainStyled>
  );
};

export default Main;
