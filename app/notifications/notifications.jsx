import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationList from './notificationList.jsx';
import NotificationForm from './notificationForm.jsx';

export class Notifications extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchBackendUrl();
    }

    render() {
        if (this.props.backendBaseUrl) {
            return (
                <div>
                    <NotificationList backendBaseUrl={this.props.backendBaseUrl} fetchNotifications = {this.props.fetchNotifications} notifications={this.props.notifications} onDismiss={this.props.dismissNotification}/>
                    <NotificationForm backendBaseUrl={this.props.backendBaseUrl} addNotification={this.props.addNotification} />
                </div>
                );
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

Notifications.propTypes = {
  notifications: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      visible: React.PropTypes.bool
    })
  ).isRequired,
  addNotification: React.PropTypes.func.isRequired,
  dismissNotification: React.PropTypes.func.isRequired,
};

export default Notifications;
