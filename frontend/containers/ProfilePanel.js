import React from "react";
<<<<<<< HEAD
import BioContainer from "./BioContainer";
=======
import { connect } from "react-redux";
import { fetchMentor } from "../actions/mentorActions.js";
import BioContainer from "./BioContainer";
import EditableLabel from "../components/EditableLabel.js";
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

class ProfilePanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { onSave } = this.props;
    var info = this.props.mentor;
    const isCondensed = this.props.condensed;
    return (
      <div>
        <div className="top">
          {isCondensed ?
            (<div>
<<<<<<< HEAD
              <Avatar image={info.profilePictureURL} width={50} height={50} />
=======
              <Avatar image={info.profilePictureURL} width={40} height={40} />
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
              <h3>
                {info.firstName} {info.lastName}
              </h3>
             </div>
            ) :
            (<div>
              <Avatar image={info.profilePictureURL} width={100} height={100} />
              <h2>
                {info.firstName} {info.lastName}
              </h2>
              </div>
            ) 
          }
          
<<<<<<< HEAD
          {this.toggleView()}
=======
          {isCondensed ? <div></div> : this.toggleView()}
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
          {/* <EditableLabel
            editing={false}
            text={info.phoneNumber}
            onSave={onSave}
            id={2}
          /> */}
        </div>

        {isCondensed ? 
            (<br></br>) :
        (<div className="bottom">
          {/* <h3 style={{ marginBottom: 8 }}>Bios</h3> */}
          
            <BioContainer
              bioInfo={info.bios}
              isEditing={this.props.isEditing}
              profile={this.props.profile}
            />
          
        </div>)}
      </div>
      // <div className="profile-about">
      //     <label className="flex-item profile-name">{this.props.mentor.firstName} {this.props.mentor.lastName}</label>
      //     <div className="display-flex">
      //         <div className="flex-item">{this.props.mentor.university}</div>
      //     </div>
      //     <div className="flex-item">{this.props.mentor.email}</div>
      //     <div className="flex-item">{this.props.mentor.phoneNumber}</div>
      // </div>
    );
  }

  toggleView() {
    if (!this.props.isEditing) return this.normalView();
    else return this.editView();
  }

  handleChange() {
    var profile = this.props.profile;
    var newVals = this.refs;

    var temp = profile.state.mentor;
    temp.email = newVals.email.value;
    temp.phoneNumber = newVals.phone.value;
    temp.university = newVals.university.value;

    profile.setState({ mentor: temp });
  }

  normalView() {
    var info = this.props.mentor;
    return (
      <div>
        <h3>{info.university}</h3>
        <hr />
        <p>
          {info.email} | {info.phoneNumber}
        </p>
      </div>
    );
  }

  editView() {
    var info = this.props.mentor;
    return (
      <div>
        <h3>
          {" "}
          <textarea
            ref="university"
            defaultValue={info.university}
            onChange={this.handleChange}
          />
        </h3>
        <hr />
        <p>
          <textarea
            ref="email"
            defaultValue={info.email}
            onChange={this.handleChange}
          />{" "}
          |{" "}
          <textarea
            ref="phone"
            defaultValue={info.phoneNumber}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }
}

export default ProfilePanel;

class Avatar extends React.Component {
  render() {
    var image = this.props.image,
      style = {
        width: this.props.width || 50,
        height: this.props.height || 50
      };

    if (!image) return null;

    return (
      <div className="avatar" style={style}>
        <img src={this.props.image} />
      </div>
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
