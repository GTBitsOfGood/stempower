<<<<<<< HEAD
import PropTypes from 'prop-types';
import React from 'react';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Register from './Register';
import { Route, Switch, withRouter } from "react-router-dom";
import Login from './Login';
import Signup from '../components/Signup';
import ImageUpload from '../components/ImageUpload';
import Account from './Account';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import Availability from './Availability';
=======
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Title from "../components/Title";
import MentorApplication from "./MentorApplication";
import Profile from "./Profile";
import Registration from "./Registration";
import WelcomePage from "./WelcomePage";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import LoginTitle from "../components/LoginTitle";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ImageUpload from "../components/ImageUpload";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import Availability from "./Availability";
import UploadDocument from "../components/UploadDocument";
import DownloadDocument from "../components/DownloadDocument";
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
    render() {
        return (
            <div>
            <div style={{height:"50px"}}>
                <div><Navbar /></div>
                <div className="body-content">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/upload' component={ImageUpload}/>
                    <Route path='/profile/:id' component={Profile} />
                    <Route path='/account' component={Account} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/application' component={Availability} />
                </Switch>
                </div>
            </div>
            <div id="footer" style={{height: "100%", backgroundColor:"white"}}>
            </div>
            </div>
        );    
    }
};
=======
  render() {
    return (
      <div>
        <div style={{ height: "50px" }}>
          <div>
            <Navbar />
          </div>
          <div className="body-content">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/upload" component={ImageUpload} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/account" component={Account} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/application" component={Availability} />
            </Switch>
          </div>
        </div>
        <div id="footer" style={{ height: "100%", backgroundColor: "white" }} />
      </div>
    );
  }
}
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

AppContainer.propTypes = {
  name: PropTypes.string
};

<<<<<<< HEAD
export default withRouter(AppContainer);
=======
const mapStateToProps = state => {
  return {
    name: state.name,
    loggedin: state.loggedin
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppContainer)
);
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
