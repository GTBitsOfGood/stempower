import React from "react";
import ProfilePanel from "./ProfilePanel.js";
import axios from "axios";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      float: "",
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

      if(this.props.condensed) {
        this.setState({ width: "50%", float: "left"})
      } else {
        this.setState({ width: "100%", float: "center"})
      }
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
      <div>
        <div
          id="user-profile"
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
                "firstName": this.state.mentor.firstName,
                "lastName": this.state.mentor.lastName,
                "profilePictureURL": "profilePictureURL" in this.state.mentor ? this.state.mentor.profilePictureURL : "http://lorempixel.com/500/500/people/",
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

export default ProfileCard;