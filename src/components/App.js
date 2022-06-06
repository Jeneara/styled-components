import React, {useState} from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Login from "components/pages/Login";
import Home from "components/pages/Home";
import LightTheme from './themes/light';
import DarkTheme from './themes/dark';

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
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
    }}}>
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
