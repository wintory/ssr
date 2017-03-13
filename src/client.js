import React from 'react'
import ReactDOM from 'react-dom'
import { Router , Route, browserHistory} from 'react-router'
import routes from './routes';

ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
