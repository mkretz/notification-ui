import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const createNotificationStyle = {
  height: 100,
  width: '100%'};

const textStyle = {
  width: '80%',
  margin: 30};

const submitStyle = {
  margin: 30};

const NotificationForm = () => (
    <div>
        <Paper style={createNotificationStyle} zDepth={1}>
          <TextField
            hintText="Enter notification text"
            multiLine={true}
            rowsMax={1}
            style={textStyle}/>
          <RaisedButton label="Submit" primary={true} style={submitStyle} />
        </Paper>
    </div>
)

NotificationForm.propTypes = {

};

export default NotificationForm;
