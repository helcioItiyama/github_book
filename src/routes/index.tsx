import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SavedDevs from '../pages/SavedDevs';
import SavedRepos from '../pages/SavedRepos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/profile/:login" component={Profile} />
    <Route path="/savedprofiles" component={SavedDevs} />
    <Route path="/savedrepositories" component={SavedRepos} />
  </Switch>
);

export default Routes;
