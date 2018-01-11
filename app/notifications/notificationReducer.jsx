import {RECEIVE_BACKEND_URL, RECEIVE_NOTIFICATIONS} from './notificationActions.jsx';

const initialState = {
  backendBaseUrl: undefined,
  notifications: [],
  echoFeature: false
};

export default function notifications(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_BACKEND_URL:
            return Object.assign({}, state, {
                backendBaseUrl: action.data.backendBaseUrl
            });
        case RECEIVE_NOTIFICATIONS:
            return Object.assign({}, state, {
                notifications: action.data
            });
        default:
            return state;
    }
}
