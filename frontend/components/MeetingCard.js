import React from "react";
import ProfilePanel from "./ProfilePanel.js";
import InlineEdit from 'react-edit-inline';
import axios from "axios";

class MeetingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      float: "",
      isEditing: false,
      meetings: []
    };
  }

  componentWillMount() {
    axios
      .get("/api/mentors/")
      .then(({ data }) => {
        this.setState({ meetings: data });
      })
      .catch(error => {
        console.log("No such person found");
      });
  }

  newSave() {
    axios
      .put("/api/mentors/" + this.props.id, this.state.mentor)
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

  render() {
    return (
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <div
          style={{
            width: this.state.width,
            float: this.state.float,
          }}
        >
          {this.toggleView()}

          {this.props.condensed ? 
            (<ProfilePanel
              condensed = {this.props.condensed}
              isEditing={this.state.isEditing}
              profile={this}
              mentor={{
                "name": this.state.mentor.name,
                "profilePictureURL": "http://lorempixel.com/500/500/people/",
                "bios": []
              }}
              onSave={this.handleSave}
            />) :
            (<ProfilePanel
              condensed = {this.props.condensed}
              isEditing={this.state.isEditing}
              profile={this}
              mentor={this.state.mentor}
              onSave={this.handleSave}
            />)
        }
        </div>
      </div>
    );
  }
}

export default MeetingCard;