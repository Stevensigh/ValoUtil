import React, { Fragment } from 'react';
import { Text } from 'react-elemental';
import { Link } from 'react-router-dom';

const Main = () => (
  <Fragment>
    <Link to="/maps">
      <button>
        <Text center>
          Click to start searching
        </Text>
      </button>
    </Link>
  </Fragment>
);

export default Main;
