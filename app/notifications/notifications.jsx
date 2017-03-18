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
  notifications: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      visible: React.PropTypes.bool
    })
  ).isRequired,
  addNotification: React.PropTypes.func.isRequired,
  dismissNotification: React.PropTypes.func.isRequired,
  subscribeNotifications: React.PropTypes.func.isRequired,
  echoEnabled: React.PropTypes.bool.isRequired,
  echoNotification: React.PropTypes.func.isRequired
};

export default Notifications;
