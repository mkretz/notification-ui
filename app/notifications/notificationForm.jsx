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

export class NotificationForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: ''};
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.textValid = this.textValid.bind(this);
    }

    handleTextChange(e) {
      this.setState({text: e.target.value});
    }

    handleSubmit() {
      this.props.addNotification(this.state.text);
      this.setState({text: ''});
    }

    textValid() {
        return this.state.text && this.state.text.length;
    }

    render() {
      return (
        <div>
            <Paper style={createNotificationStyle} zDepth={1}>
              <TextField
                hintText="Enter notification text"
                multiLine={true}
                rowsMax={1}
                style={textStyle}
                value={this.state.text}
                onChange={this.handleTextChange}/>
              <RaisedButton disabled={!this.textValid()} onClick={this.handleSubmit} label="Submit" primary={true} style={submitStyle} />
            </Paper>
        </div>
      )
    }
}

NotificationForm.propTypes = {

};

export default NotificationForm;
