import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AgentsContainer from 'client/app/react/containers/agents';
import MapsContainer from 'client/app/react/containers/maps';
import MainContainer from 'client/app/react/containers/main';
import Title from 'client/app/react/components/title';

const Root = () => (
  <>
    <Title />
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/agents" component={AgentsContainer} />
      <Route path="/maps" component={MapsContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

export default Root;
