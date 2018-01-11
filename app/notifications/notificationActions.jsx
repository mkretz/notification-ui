import 'whatwg-fetch';

/*
 * action types
 */

export const RECEIVE_BACKEND_URL = 'RECEIVE_BACKEND_URL';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

/*
 * action creators
 */

function receiveBackendUrl(data) {
    return { type: RECEIVE_BACKEND_URL, data };
}

function receiveNotifications(data) {
    return { type: RECEIVE_NOTIFICATIONS, data };
}

/*
 * thunks
 */
export function fetchBackendUrl() {
    return (dispatch,getState) => {
        const url = '/config/conf.json'
        fetch(url)
            .then((response ) => response.json())
            .then((data) => dispatch(receiveBackendUrl(data)))
        }
}

export function fetchNotifications(backendBaseUrl){
    return (dispatch,getState) => {
        const url = backendBaseUrl + '/notification';
        fetch(url)
            .then((response) => response.json())
            .then((data) => dispatch(receiveNotifications(data)))
        }
}

export function createNotification(backendBaseUrl, notificationText){
    return (dispatch,getState) => {
        const url = backendBaseUrl + '/notification';
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: notificationText,
            })
        }
        return fetch(url, opts);
    }
}

export function dismissNotification(backendBaseUrl, notification){
    return (dispatch,getState) => {
        const url = backendBaseUrl + '/notification/' + notification._id;
        const opts = {
            method: 'DELETE',
        }
        return fetch(url, opts);
    }
}
