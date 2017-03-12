import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notifications from './notifications/notificationReducer.jsx';

const reducer = combineReducers({
    notifications,
    routing: routerReducer,
});

export default reducer;
