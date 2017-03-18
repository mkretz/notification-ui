import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const NotificationElement = ({notification, onDismiss}) => (
  <div>
    <ListItem
      primaryText={notification.text}
      leftIcon={<ActionGrade />}
      rightIconButton={<IconButton onClick={() => onDismiss(notification)} tooltip="dismiss"><ActionDelete /></IconButton>}/>
    <Divider />
  </div>
)

NotificationElement.propTypes = {
  notification: React.PropTypes.shape({
    text: React.PropTypes.string,
    visible: React.PropTypes.bool
  }).isRequired,
  onDismiss: React.PropTypes.func.isRequired
};

export default NotificationElement;
