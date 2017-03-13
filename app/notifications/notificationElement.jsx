import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const NotificationElement = ({notification}) => (
  <div key={notification.id}>
    <ListItem primaryText={notification.text} leftIcon={<ActionGrade />} /> <Divider />
  </div>
)

NotificationElement.propTypes = {

};

export default NotificationElement;
