import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage'

const DevRoutes = () => (
  <Route
    render={() => {
      return (
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      );
    }}
  />
);

export default DevRoutes;
