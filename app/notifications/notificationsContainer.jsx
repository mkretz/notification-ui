import { connect } from 'react-redux';
import Notifications from './notifications.jsx';
import {createNotification, dismissNotification} from './notificationActions.jsx';

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.notifications
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDismissButtonClick: (notification) => {
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
