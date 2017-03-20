import React from 'react';
import {render} from 'react-dom';
import './fonts/index.css';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HeaderContainer from './header/headerContainer.jsx';
import NotificationsContainer from './notifications/notificationsContainer.jsx';
import {routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import io from 'socket.io-client';
import reducer from './reducer.jsx';

const socket = io.connect('https://socketio-echo.scapp.io');

injectTapEventPlugin();

const routerMiddlewareBrowserHistory = routerMiddleware(browserHistory);

let store = createStore(
    reducer,
    applyMiddleware(
        routerMiddlewareBrowserHistory,
        thunk.withExtraArgument(socket)
    )
);

const history = syncHistoryWithStore(browserHistory, store)

let routes = (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={HeaderContainer}>
          <IndexRedirect to="notification" />
          <Route path="notification" component={NotificationsContainer}>
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

render(routes, document.getElementById('app'));
