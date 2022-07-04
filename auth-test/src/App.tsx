import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from './lib/routes';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  const pages = useMemo(
    () =>
      routes.map((route, index) => (
        <Route
          key={index}
          index={route.index}
          path={route.path}
          element={route.element}
        ></Route>
      )),
    []
  );

  return (
    <div className="app">
      <GlobalStyle />
      <Routes>{pages}</Routes>
    </div>
  );
}

export default App;
