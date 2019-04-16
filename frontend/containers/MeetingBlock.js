import React from "react";
import InlineEdit from 'react-edit-inline';
import axios from "axios";

import './../assets/stylesheets/organization_styles.css';




class MeetingBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      meeting: {
        date: "",
        description: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { onSave } = this.props;
    var info = this.props.mentor;
    return (
      <div>
        <div className="top">
          
          {this.toggleView()}

        </div>

        <div className="bottom">
          
        </div>
      </div>
    );
  }

  toggleView() {
    if (!this.state.isEditing) return this.normalView();
    else return this.editView();
  }

  handleChange(data) {
    var temp = this.props.meeting;
    temp.description = data.message;
    this.setState({ meeting: temp });

    axios
      .put("/api/meetings/" + this.props.meeting.id, this.state.meeting)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  normalView() {
    var info = this.props.meeting;
    return (
      <div>
        <h3>{info.date}</h3>
        <hr />
        <p>
          <InlineEdit
            activeClassName="editing"
            text={this.props.meeting.description}
            paramName="message"
            change={this.handleChange}
            style={{
              minWidth: 150,
              display: 'inline-block',
              margin: 0,
              padding: 0,
              fontSize: 15,
              outline: 50,
              border: 33
            }}
          />
        </p>
      </div>
    );
  }

  editView() {
    var info = this.props.meeting;
    return (
      <div>
        <h3>
          {" "}
          <textarea
            ref="description"
            defaultValue={info.description}
            onChange={this.handleChange}
          />
        </h3>
      </div>
    );
  }
}

export default MeetingBlock;

