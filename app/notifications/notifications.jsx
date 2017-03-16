import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationList from './notificationList.jsx';
import NotificationForm from './notificationForm.jsx';

const Notifications = ({notifications, addNotification, dismissNotification, subscribeNotifications, echoEnabled, echoNotification}) => (
    <div>
        <NotificationList notifications={notifications} onDismiss={dismissNotification}/>
        <NotificationForm addNotification={addNotification} subscribeNotifications={subscribeNotifications} echoNotification={echoNotification} echoEnabled={echoEnabled}/>
    </div>
)

Notifications.propTypes = {
  notifications: React.PropTypes.array,
  addNotification: React.PropTypes.func,
  dismissNotification: React.PropTypes.func,
  subscribeNotifications: React.PropTypes.func,
  echoEnabled: React.PropTypes.bool,
  echoNotification: React.PropTypes.func
};

export default Notifications;
