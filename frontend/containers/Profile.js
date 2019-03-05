import React from "react";
import axios from "axios";

import ImageDisplay from "../components/ImageDisplay.js";
import ProfilePanel from "./ProfilePanel.js";
import BioItem from "../components/BioItem.js";
import BioContainer from "./BioContainer";

class Profile extends React.Component {
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

  //api call for mentor
  componentWillMount() {
    const id = this.props.match.params.id;

    axios
      .get("/api/mentors/" + id)
      .then(({ data }) => {
        this.setState({ mentor: data });
      })
      .catch(error => {
        console.log(
          "No such person found, creating dummy person for debugging"
        );
        console.log(error);
        this.setState({
          mentor: {
            bios: [
              {
                title: "This is my Bio",
                bio: "I am a person, and I am capable of eating and sleeping. "
              }
            ],
            firstName: "Dummy",
            lastName: "Lname",
            university: "GECH University",
            email: "gpburdell@gatech.edu",
            phoneNumber: "1234567",
            profilePictureURL: "http://lorempixel.com/500/500/people/"
          }
        });
      });
  }

  newSave() {
    axios
      .put("/api/mentors/" + this.props.match.params.id, this.state.mentor)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  toggleView() {
    if (!this.state.isEditing) return this.editView();
    else return this.saveView();
  }

  editView() {
    return (
      <button
        onClick={() => {
          this.setState({ isEditing: true });
        }}
      >
        Edit
      </button>
    );
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
      <div className="container">
        <div className="jumbotron">
          <div className="profile-header">
            <div id="user-profile">
              {this.toggleView()}
              <ProfilePanel
                isEditing={this.state.isEditing}
                profile={this}
                mentor={this.state.mentor}
                onSave={this.handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
