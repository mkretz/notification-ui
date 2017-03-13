import { connect } from 'react-redux';
import Notifications from './notifications.jsx';
import {createNotification, dismissNotification} from './notificationActions.jsx';

const getVisibleNotifications = (notifications) => (notifications ? notifications.filter((n) => n.visible) : undefined);

const mapStateToProps = (state) => {
    return {
        notifications: getVisibleNotifications(state.notifications.notifications)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dismissNotification: (notification) => {
            dispatch(dismissNotification(notification.id))
        },
        addNotification: (text) => {
            dispatch(createNotification(text))
        }
    }
};

const NotificationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);

export default NotificationsContainer;
