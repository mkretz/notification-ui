import React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import NotificationElement from './notificationElement.jsx';

const notificationListStyle = {
  margin: '10 10 10 0',
  height: '70%',
  width: '100%'
};

export class NotificationList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={notificationListStyle} zDepth={1}>
              <List>
                {this.props.notifications.map(notification => <NotificationElement backendBaseUrl={this.props.backendBaseUrl} onDismiss={this.props.onDismiss} key={notification.id} notification={notification} />)}
              </List>
            </Paper>
        );
    }

    componentWillMount(){
        this.props.fetchNotifications(this.props.backendBaseUrl);
    }

}

NotificationList.propTypes = {
  notifications: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      visible: React.PropTypes.bool
    })
  ).isRequired,
  onDismiss: React.PropTypes.func.isRequired
};

export default NotificationList;
