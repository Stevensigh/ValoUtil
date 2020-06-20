import React from 'react';
import Favicon from 'react-favicon';
import { Redirect, Route, Switch } from 'react-router';
import ExampleContainer from 'client/app/react/containers/example';

const Root = () => (
  <>
    <Favicon />

    <Switch>
      <Route path="/" component={ExampleContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

export default Root;
