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
      mentor: {
        bios: [],
        firstName: "",
        lastName: "",
        university: "",
        email: "",
        phone: ""
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
            phone: "1234567"
          }
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="profile-header">
            {/*<ImageDisplay id={1} className="img-responsive" width="200" height="200"/>*/}

            <ProfilePanel mentor={this.state.mentor} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
