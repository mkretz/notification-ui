/*
 * action types
 */

export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
export const ENABLE_ECHO_FEATURE = 'ENABLE_ECHO_FEATURE';
export const DISABLE_ECHO_FEATURE = 'DISABLE_ECHO_FEATURE';


/*
 * action creators
 */

export function createNotification(text) {
    return { type: CREATE_NOTIFICATION, text};
}

export function dismissNotification(id) {
    return { type: DISMISS_NOTIFICATION, id};
}

export function enableEcho() {
    return { type: ENABLE_ECHO_FEATURE};
}

export function disableEcho() {
    return { type: DISABLE_ECHO_FEATURE};
}

/*
 * thunks
 */

export function subscribeToUpdates() {
  return (dispatch, getState, socket) => {
    socket.on('connect', function() {
      dispatch(enableEcho());
      socket.on('msg', (msg) => {
        dispatch(createNotification(msg))
      });
    });
    socket.on('disconnect', function() {
      dispatch(disableEcho());
    });
  };
}

export function echoNotification(text) {
  return (dispatch, getState, socket) => {
    socket.emit('msg', (text) => text,  text);
  };
}
