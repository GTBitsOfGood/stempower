import React, { Component } from "react";
import { connect } from "react-redux";

class EditableLabel extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  edit() {
    this.setState({ editing: true });
  }

  save() {
    this.props.onSave(this.props.id, this.refs.newText.value);
    this.setState({ editing: false });
  }

  renderNormal() {
    return (
      <div>
        {this.props.text}
        <button onClick={() => this.edit()}>Edit</button>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <textarea ref="newText" defaultValue={this.props.text} />
        <button
          onClick={() => {
            this.save();
          }}
        >
          Save
        </button>
      </div>
    );
  }

  render() {
    if (!this.state.editing) return this.renderNormal();
    else return this.renderForm();
  }
}

export default EditableLabel;