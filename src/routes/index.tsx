import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RepositoryDetail from '../pages/RepositoryDetail';

export default function Routes() {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={RepositoryDetail} path="/details" />
    </Switch>
  );
}

