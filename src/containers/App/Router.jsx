import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import Auth from '../Auth/index';
import Task from '../Task/index';
import Person from '../Person/index';
import Department from '../Department/index';
import Role from '../Role/index';

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div id="main-content">
      <Route path="/person" component={Person} />
      <Route path="/task" component={Task} />
      <Route path="/department" component={Department} />
      <Route path="/role" component={Role} />

    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/auth" component={Auth} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
