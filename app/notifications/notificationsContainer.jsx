import { connect } from 'react-redux';
import Notifications from './notifications.jsx';
import {createNotification, dismissNotification, fetchBackendUrl, fetchNotifications} from './notificationActions.jsx';

const getVisibleNotifications = (notifications) => (notifications ? notifications.filter((n) => n.visible) : undefined);

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.notifications,
        echoEnabled: state.notifications.echoFeature,
        backendBaseUrl: state.notifications.backendBaseUrl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dismissNotification: (backendBaseUrl,notification) => {
            dispatch(dismissNotification(backendBaseUrl,notification))
                .then(() => dispatch(fetchNotifications(backendBaseUrl)))
        },
        addNotification: (backendBaseUrl,text) => {
            dispatch(createNotification(backendBaseUrl,text))
                .then(() => dispatch(fetchNotifications(backendBaseUrl)))
        },
        fetchBackendUrl: () => {
            dispatch(fetchBackendUrl())
        },
        fetchNotifications: (backendBaseUrl) => {
            dispatch(fetchNotifications(backendBaseUrl))
        }
    }
};

const NotificationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);

export default NotificationsContainer;
