import React from 'react';
import {render} from 'react-dom';
import './fonts/index.css';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Notifications from './notifications/notifications.jsx';

injectTapEventPlugin();

let routes = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Notifications}>
      </Route>
    </Router>
  </MuiThemeProvider>
);

render(routes, document.getElementById('app'));
