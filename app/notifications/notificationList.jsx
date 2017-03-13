import React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import NotificationElement from './notificationElement.jsx';

const notificationListStyle = {
  margin: '10 10 10 0',
  height: '70%',
  width: '100%'
};

const NotificationList = ({notifications}) => (
    <Paper style={notificationListStyle} zDepth={1}>
      <List>
        {notifications.map(notification => <NotificationElement key={notification.id} notification={notification} />)}
      </List>
    </Paper>
)

NotificationList.propTypes = {

};

export default NotificationList;
