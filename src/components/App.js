import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
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

const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
