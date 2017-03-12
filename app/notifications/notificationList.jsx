import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const notificationListStyle = {
  margin: '10 10 10 0',
  height: '70%',
  width: '100%'
};

const NotificationList = ({notifications}) => (
    <Paper style={notificationListStyle} zDepth={1}>
      <List>
        {notifications.map(notification => <div key={notification.id}><ListItem primaryText={notification.text} /> <Divider /></div>)}
      </List>
    </Paper>
)

NotificationList.propTypes = {

};

export default NotificationList;
