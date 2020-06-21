import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import Maps from 'client/app/react/components/ui/maps';

const MapsContainer = () => (
  <Fragment>
    <Maps />
  </Fragment>
);

export default withRouter(MapsContainer);
