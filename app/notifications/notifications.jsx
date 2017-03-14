import React from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationList from './notificationList.jsx';
import NotificationForm from './notificationForm.jsx';

const Notifications = ({notifications, addNotification, dismissNotification, subscribeNotifications, echoNotification}) => (
    <div>
        <AppBar title="Notifications" iconElementRight={<Badge badgeContent={notifications.length} secondary={true}><NotificationsIcon /></Badge>}></AppBar>
        <NotificationList notifications={notifications} onDismiss={dismissNotification}/>
        <NotificationForm addNotification={addNotification} subscribeNotifications={subscribeNotifications} echoNotification={echoNotification}/>
    </div>
)

Notifications.propTypes = {

};

export default Notifications;
