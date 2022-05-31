import React from "react";
import {Button} from 'components/common';
import {createGlobalStyle} from 'styled-components';

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
    <Button>
      Primary Button
    </Button>
    <Button secondary>
      Secondary Button
    </Button>
    <Button disabled>
      Disabled Button
    </Button>
    <Button large>
      Large Button
    </Button>
    </>
  );
}

export default App;
