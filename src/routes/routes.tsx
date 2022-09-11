import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Demo, NotFound } from '../pages';
import PrivateRoute from './Private';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Demo} />

      <PrivateRoute path="/user/:id" component={Demo} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
