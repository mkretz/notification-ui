/*
 * action types
 */

export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';

/*
 * action creators
 */

export function createNotification(text) {
    return { type: CREATE_NOTIFICATION, text};
}

export function dismissNotification(id) {
    return { type: DISMISS_NOTIFICATION, id};
}

