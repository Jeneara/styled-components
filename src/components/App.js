import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import {Button} from 'components/common';
import {createGlobalStyle} from 'styled-components';
import Login from "components/pages/Login";
import Home from "components/pages/Home";

const GlobalStyle = createGlobalStyle`
  body{
    background: #fff;
    min-height: 100vh;
    margin: 0;
    color: #000;
    font-family: 'Kaushan Script';
  }

`;

function App() {
  return (
    <>
    <GlobalStyle />
    <h1>
      App
    </h1>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
