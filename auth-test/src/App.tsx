import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from './lib/routes';

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
      <Routes>{pages}</Routes>
    </div>
  );
}

export default App;
