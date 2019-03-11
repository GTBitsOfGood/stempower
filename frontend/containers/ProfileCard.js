import React from "react";
import ProfilePanel from "./ProfilePanel.js";
import axios from "axios";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      mentor: {
        bios: [],
        firstName: "",
        lastName: "",
        university: "",
        email: "",
        phoneNumber: "",
        profilePictureURL: ""
      }
    };
  }

  componentWillMount() {
    const id = this.props.id;
    axios
      .get("/api/mentors/" + id)
      .then(({ data }) => {
        this.setState({ mentor: data });
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
          id="user-profile"
          style={{
            width: "35%",
            float: "left"
          }}
        >
          {this.toggleView()}
          <ProfilePanel
            isEditing={this.state.isEditing}
            profile={this}
            mentor={this.state.mentor}
            onSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
