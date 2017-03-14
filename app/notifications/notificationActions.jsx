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

/*
 * thunks
 */

export function subscribeToUpdates() {
  return (dispatch, getState, socket) => {
    socket.on('connect', function() {
      console.log(socket.id);
      socket.on('msg', (msg) => {
        console.log(msg);
        dispatch(createNotification(msg))
      });
    });
  };
}

export function echoNotification(text) {
  return (dispatch, getState, socket) => {
    console.log(socket.id);
    socket.emit('msg', (text) => text,  text);
  };
}
