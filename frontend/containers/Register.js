import React from "react";
import { Router } from 'react-router';
import ReactRadioButtonGroup from "react-radio-button-group";
import axios from "axios";

/* The flow should be WhatAreYou?, OrgTell/MentorTell, LandingPage */
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }

  /* Bind the class function to the component object to that this
       method is in scope for the jsx */
  render() {
    return (
      <div className="vertical-container-centered full-center">
        <UserForm
          setCredentials={this.props.setCredentials}
          toggleRegister={this.props.toggleRegister}
        />
      </div>
    );
  }
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      userType: "",
      userTypeObject: {}
    };

    /* Bind the class function to the component object to that this
           method is in scope for the jsx */
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRBGSelect = this.handleRBGSelect.bind(this);
    this.createUserTypeObj = this.createUserTypeObj.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
    this.handleUserTypeObjectChange = this.handleUserTypeObjectChange.bind(this);
  }

  render() {
    return (
      <div className="vertical-container-centered">
        <h1>
          Register an <span className="primary-color">Account</span>
        </h1>
        <input
          type="text"
          className="text-input"
          placeholder="username"
          onChange={this.handleUsernameChange}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          className="text-input"
          placeholder="email"
          onChange={e => this.setState({ email: e.target.value })}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="password"
          className="text-input"
          placeholder="password"
          onChange={this.handlePasswordChange}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="password"
          className="text-input"
          placeholder="confirm password"
          onChange={this.handleConfirmPasswordChange}
          style={{ marginBottom: "10px" }}
        />
        <div style={{ width: "100%" }}><h5> I am a: </h5></div>
        <div style={{ width: "100%" }}>
          <ReactRadioButtonGroup
            name="userTypeRBG"
            options={[
              { value: "parent", label: "Parent" },
              { value: "mentor", label: "Mentor" },
              { value: "organization", label: "Organization Leader" }
            ]}
            isStateful={true}
            onChange={val => this.handleRBGSelect(val)}
            labelClassName="radio-label"
          />
          {this.renderAdditionalInfo()}
        </div>
        <p>
          Do you need to{" "}
          <a href="javascript:void(0);" onClick={this.toggleRegister}>
            login?
            </a>
        </p>
        <button onClick={this.createUserTypeObj}>Register</button>
      </div>
    );
  }

  renderAdditionalInfo() {
    var result = null;
    if (this.state.userType == "parent") {
      result = (
        <div>
          Select Organization:
          <OrganizationList
            handleOrganizationSelected={(event) => this.handleUserTypeObjectChange(event, "organization")}
          >
          </OrganizationList>
        </div>
      );
    }

    if (this.state.userType == "mentor") {
      result = (
        <div>
          Select Organization:
          <OrganizationList
            handleOrganizationSelected={(event) => this.handleUserTypeObjectChange(event, "organization")}
          >
          </OrganizationList>
          <br />
          <input
            type="text"
            className="text-input"
            placeholder="Phone Number"
            onChange={evt => this.handleUserTypeObjectChange(evt, "phoneNumber")}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="text"
            className="text-input"
            placeholder="University"
            onChange={evt => this.handleUserTypeObjectChange(evt, "university")}
            style={{ marginBottom: "10px" }}
          />
        </div>
      );
    }

    if (this.state.userType == "organization") {
      result = (
        <div>
          <input
            type="text"
            className="text-input"
            placeholder="Organization Name"
            onChange={evt => this.handleUserTypeObjectChange(evt, "name")}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="text"
            className="text-input"
            placeholder="Address"
            onChange={evt => this.handleUserTypeObjectChange(evt, "address")}
            style={{ marginBottom: "10px" }}
          />
        </div>
      );
    }

    return result;
  }

  handleUserTypeObjectChange(event, field) {
    var newUserObject = this.state.userTypeObject
    newUserObject[field] = event.target.value
    this.setState(
      Object.assign({}, this.state, { userTypeObject: newUserObject })
    );
  }

  handleRBGSelect(value) {
    this.setState({ userType: value });
  }

  handleUsernameChange(event) {
    /**
     * This will update the state with out new value of the input,
     * which then gets passed to the input's value and causes the input to
     * be re-rendered.
     */
    this.setState(
      Object.assign({}, this.state, { username: event.target.value })
    );
  }

  handlePasswordChange(event) {
    /**
     * This will update the state with out new value of the input,
     * which then gets passed to the input's value and causes the input to
     * be re-rendered.
     */
    this.setState(
      Object.assign({}, this.state, { password: event.target.value })
    );
  }

  handleConfirmPasswordChange(event) {
    /**
     * This will update the state with out new value of the input,
     * which then gets passed to the input's value and causes the input to
     * be re-rendered.
     */
    this.setState(
      Object.assign({}, this.state, { confirmPassword: event.target.value })
    );
  }

  toggleRegister(event) {
    this.props.toggleRegister();
  }

  setCredentials(org) {
    const { username, password, confirmPassword, email, userType } = this.state;

    var user = {
      username: username,
      password: password,
      email: email,
      userType: userType,
      organization: org
    }

    console.log(user)
    axios
      .post("api/user", user)
      .then(res => {
        alert("Account Created!");
        this.toggleRegister();
      })
      .catch(e => console.log(e));
    // this.props.setCredentials({ username: username, password: password });
  }

  createUserTypeObj() {
    const { username, email, userType, userTypeObject } = this.state;

    if (this.validateForm() == false) {
      return;
    }

    if (userType == "organization") {
      axios
        .post("api/organizations", {
          name: userTypeObject['name'],
          address: userTypeObject['address']
        })
        .then(res => {
          this.setCredentials(res.data._id);
        })
        .catch(e => console.log(e));
    }

  }

  validateForm() {
    const { username, password, confirmPassword, email, userType, userTypeObject } = this.state;
    if (username.length === 0) {
      alert("Please specify a valid username");
      return false;
    }
    if (password.length < 6) {
      alert("Password is too short");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    if (email.length === 0) {
      alert("Please specify a valid email address");
      return false;
    }
    if (userType == null) {
      alert("Please select a user type");
      return false;
    } else {
      if (userType == 'parent') {

      }
      if (userType == 'organization') {
        if (userTypeObject['name'] == null) {
          alert("Please specify organization name");
          return false;
        }
        if (userTypeObject['address'] == null) {
          alert("Please specify organization address");
          return false;
        }
      }
      if (userType == 'mentor') {

      }
    }
  }
}


class OrganizationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: []
    }
  }

  componentWillMount() {
    axios
      .get("api/organizations/")
      .then(res => {
        var data = res.data;
        var organizations = [];
        for (var i = 0; i < data.length; i++) {
          var d = data[i];
          organizations.push({ id: d._id, name: d.name });
        }
        this.setState({ organizations: organizations });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <select onChange={this.props.handleOrganizationSelected}>
          {this.state.organizations.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

class WhatAreYou extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="vertical-container">
        <h1>
          Are you a <span className="primary-color">mentor</span> or an{" "}
          <span className="primary-color">organization leader</span>?
        </h1>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <button style={{ marginBottom: "20px" }}>I'm a mentor!</button>
          <button>I lead an organization!</button>
        </div>
      </div>
    );
  }
}
class RegisterMentor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-container">
        <div>
          <h1>
            What is the name of your{" "}
            <span className="primary-color">organization</span>?
          </h1>
        </div>
        <input
          type="text"
          className="text-input"
          placeholder="e.g. Girl's Who Code"
          onChange={this.handleUsernameChange}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <div>
          <h1>
            What is your <span className="primary-color"> email address</span>?
          </h1>
        </div>
        <br />
        <input
          type="text"
          className="text-input"
          placeholder="jane@example.com"
          onChange={this.handleUsernameChange}
          style={{ marginBottom: "10px" }}
        />
      </div>
    );
  }
}
class RegisterOrganization extends React.Component { }

export default Register;
