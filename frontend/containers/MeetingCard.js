import React from "react";
import ProfilePanel from "./ProfilePanel.js";
import axios from "axios";
import InlineEdit from 'react-edit-inline';
import MeetingBlock from "./MeetingBlock.js"

class MeetingCard extends React.Component {
  constructor(props) {
    super(props);
    this.showMeetings = this.showMeetings.bind(this);

    this.state = {
      width: "",
      float: "",
      isEditing: false,
      meetings: [],
    };
  }

  componentWillMount() {
    const id = this.props.id;
     axios
      .get("/api/meetings/")
      .then(({ data }) => {
        this.setState({ meetings: data});
      })
      .catch(error => {
        console.log("No such meetings found");
      });
  }

  newSave() {
    axios
      .put("/api/meetings/" + this.props.id, this.state.meeting)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  toggleView() {
    if (!this.state.isEditing) return this.editView();
    else return this.saveView();
  }

  editView() {
    if (this.props.isEditable)
      return (
        <button
          onClick={() => {
            this.setState({ isEditing: true });
          }}
        >
          Edit
        </button>
      );
    else return;
  }

  saveView() {
    return (
      <button
        onClick={() => {
          this.newSave();
          this.setState({ isEditing: false });
        }}
      >
        Save
      </button>
    );
  }

  showMeetings() {
    var ret = [];
    for (var i = 0; i < this.props.meetings.length; i++) {
          const index = i;
          ret.push(<div><MeetingBlock meeting={this.props.meetings[index]} isEditing={false}/></div>);
    }
    return ret;
  }

  render() {
    return (
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <div
          id="user-profile"
          style={{
            width: this.state.width,
            float: this.state.float,
          }}
        >
          {this.showMeetings()}
        </div>
      </div>
    );
  }
}

export default MeetingCard;