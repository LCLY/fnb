import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
/* containers */
import Homepage from './containers/HomePage/HomePage';

function App() {
  let route = null;

  route = (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/404" component={null} />
      <Redirect from="*" to="/404" />
    </Switch>
  );

  return <Suspense fallback={<p>Loading...</p>}>{route}</Suspense>;
}

export default App;
