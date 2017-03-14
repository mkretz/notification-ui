import {CREATE_NOTIFICATION, DISMISS_NOTIFICATION, ENABLE_ECHO_FEATURE, DISABLE_ECHO_FEATURE} from './notificationActions.jsx';
import uuid from 'uuid';

const initialState = {
  notifications: [
      {id: uuid(), text: 'This is a first notification', visible: true},
      {id: uuid(), text: 'This is a second one', visible: true},
  ],
  echoFeature: false
};

export default function notifications(state = initialState, action) {
    switch (action.type) {
        case CREATE_NOTIFICATION:
            return Object.assign({}, state, {
                notifications: [...state.notifications, {text: action.text, id: uuid(), visible: true}]
            });
        case DISMISS_NOTIFICATION:
            return Object.assign({}, state, {
                notifications: state.notifications.map((notification) => (notification.id === action.id ? {text: notification.text, id: notification.id, visible: false} : notification))
            });
        case ENABLE_ECHO_FEATURE:
            return Object.assign({}, state, {
                echoFeature: true
            });
        case DISABLE_ECHO_FEATURE:
            return Object.assign({}, state, {
                echoFeature: false
            });
        default:
            return state;
    }
}
