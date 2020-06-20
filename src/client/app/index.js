import React, { Component } from 'react';
import { Elemental } from 'react-elemental';
import karlaBold from 'react-elemental-fonts/karla-bold';
import karlaRegular from 'react-elemental-fonts/karla-regular';
import sourceCodeProMedium from 'react-elemental-fonts/source-code-pro-medium';
import sourceCodeProRegular from 'react-elemental-fonts/source-code-pro-regular';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';
import Root from 'client/app/react/root';
import store from 'client/app/redux/store';
import { objLookup } from 'shared/util/data';

const {
  NODE_ENV,
  VERSION,
} = process.env;

export default class App extends Component {
  constructor(props) {
    super(props);

    const isProduction = NODE_ENV === 'production';

    // Sentry initialization
    if (isProduction) {
      Sentry.init({
        dsn: objLookup(store.getState(), ['config', 'client', 'sentry_dsn']),
      });
      Sentry.configureScope((scope) => {
        scope.setTag('version', VERSION);
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Elemental
            fontOpts={{
              primary: {
                bold: karlaBold,
                regular: karlaRegular,
              },
              secondary: {
                bold: sourceCodeProMedium,
                regular: sourceCodeProRegular,
              },
            }}
          >
            <Root />
          </Elemental>
        </BrowserRouter>
      </Provider>
    );
  }
}
