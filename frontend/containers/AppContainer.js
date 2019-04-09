import React from 'react';
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
import axios from "axios";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.checkLoginStatus();
    this.state = {logged_in: false};
  }

  checkLoginStatus() {
    axios
      .get("/api/user/logged_in")
      .then(res => {
        if (res.data.loggedIn == "logged_in") {
            if (!this.state.logged_in) {
                this.setState({
                    logged_in: true, 
                    userType: res.data.userType,
                    mentorId: res.data.mentorId,
                    orgId: res.data.orgId,
                });
            }
        } else {
            if (this.state.logged_in) {
                this.setState({
                    logged_in: false, 
                    userType: null,
                    mentorId: null,
                    orgId: null
                });
            }
        }
      })
      .catch(error => {
        console.log(error);
      });
    }

    render() {
        this.checkLoginStatus();
        return (
            <div>
            <div style={{height:"50px"}}>
                <div><Navbar logged_in={this.state.logged_in} userType={this.state.userType}/></div>
                <div className="body-content">
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path='/upload' component={ImageUpload}/>
                        <Route path='/account' 
                            render={(props) => 
                                <Account logged_in={this.state.logged_in} 
                                    userType={this.state.userType}
                                    mentorId={this.state.mentorId}
                                    orgId={this.state.orgId} />} />
                        <Route path='/dashboard' 
                            render={(props) => 
                                <Dashboard 
                                    logged_in={this.state.logged_in} 
                                    userType={this.state.userType}/>} />
                    </Switch>
                </div>
            </div>
            <div id="footer" style={{height: "100%", backgroundColor:"white"}} />
            </div>
        );    
    }
};

export default withRouter(AppContainer);
