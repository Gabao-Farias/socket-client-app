import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { NotFound } from '../pages';
// import { GlobalUserContext } from '../contexts';

const PrivateRoute: React.FC<RouteProps> = routeProps => {
  // const { user } = useContext(GlobalUserContext);

  return true ? <Route {...routeProps} /> : <Route component={NotFound} />;
};

export default PrivateRoute;
