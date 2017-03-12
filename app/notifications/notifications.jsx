import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationList from './notificationList.jsx';
import NotificationForm from './notificationForm.jsx';

const Notifications = ({notifications}) => (
    <div>
        <AppBar title="Notifications"></AppBar>
        <NotificationList notifications={notifications}/>
        <NotificationForm />
    </div>
)

Notifications.propTypes = {

};

export default Notifications;
