import React from 'react';
import { connect } from 'react-redux';

/* The flow should be WhatAreYou?, OrgTell/MentorTell, LandingPage */
class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({},props);
    }

    /* Bind the class function to the component object to that this
       method is in scope for the jsx */
    render(){
        return(
            <div>
            {(this.state.regStep.isMentor || this.state.regStep.mentorTell || this.state.regStep.orgTell) ? <div></div> : <div><UserForm setCredentials={this.props.setCredentials} toggleRegister={this.props.toggleRegister} /></div>}
            {this.state.regStep.isMentor ? <WhatAreYou /> : <div></div>}
            {this.state.regStep.mentorTell ? <RegisterMentor /> : <div></div>}
            {this.state.regStep.orgTell ? <RegisterOrganization /> : <div></div>}
            </div>

        )
    }
}

class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        };

        /* Bind the class function to the component object to that this
           method is in scope for the jsx */
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.setCredentials = this.setCredentials.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    render(){
        return (
                <div className="vertical-container">
                    <div className="vertical-container">
                    <h1>Register an <span className="primary-color">Account</span></h1>
                    <div style={{width:"100%"}}>
                        <input 
                            type="text"
                            className="text-input"
                            placeholder="username"
                            onChange={this.handleUsernameChange}
                            style={{marginBottom: "10px"}}
                        />
                    </div>
                    <div style={{width:"100%"}}>
                        <input 
                            type="password"
                            className="text-input"
                            placeholder="password"
                            onChange={this.handlePasswordChange}
                            style={{marginBottom: "10px"}}
                        />
                    </div>
                    <div style={{width:"100%"}}>
                        <input 
                            type="password"
                            className="text-input"
                            placeholder="confirm password"
                            onChange={this.handleConfirmPasswordChange}
                            style={{marginBottom: "10px"}}
                        />
                    </div>
                    <div style={{marginLeft:"10px"}}>
                        Do you need to <a href="javascript:void(0);" onClick={this.toggleRegister}>login?</a>
                    </div>
                    <br />
                    <div style={{alignSelf: "flex-end"}} >
                    <button onClick={this.setCredentials}>Register</button>
                    </div>
                    </div>
                </div>
        )
    }

    handleUsernameChange(event) {
        /**
         * This will update the state with out new value of the input,
         * which then gets passed to the input's value and causes the input to
         * be re-rendered.
         */
        this.setState(Object.assign({}, this.state, {username: event.target.value}));
        
    }

    handlePasswordChange(event) {
        /**
         * This will update the state with out new value of the input,
         * which then gets passed to the input's value and causes the input to
         * be re-rendered.
         */
        this.setState(Object.assign({}, this.state, {password: event.target.value}))
        
    }

    toggleRegister(event){
        this.props.toggleRegister();
    }

    setCredentials() {
        const { username, password } = this.state;

        if (username.length === 0) {
            alert('Please specify a valid username');
            return;
        }

        if (password.length < 6) {
            alert('Please specify a valid password');
            return;
        }

        /**
         * Because of the mapDispatchToProps function below, "setCredentials" is availble
         * from the props of this component
         */
        this.setState(Object.assign({}, this.state, {isMentor: true}))
        this.props.setCredentials({username: username, password:password});
    }
}

class WhatAreYou extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="vertical-container">
                <h1>Are you a <span className="primary-color">mentor</span> or an <span className="primary-color">organization leader</span>?</h1>
                <div style={{display:"flex", alignSelf:"center",flexDirection:"column", justifyContent:"center"}}>
                <button style={{marginBottom:"20px"}}>I'm a mentor!</button>
                <button>I lead an organization!</button>
                </div>
            </div>
        )
    }
}

class RegisterMentor extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="page-container">
                <div><h1>What is the name of your <span className="primary-color">organization</span>?</h1></div>
                <input 
                            type="text"
                            className="text-input"
                            placeholder="i.e. Girl's Who Code"
                            onChange={this.handleUsernameChange}
                            style={{marginBottom: "10px"}}
                        />
                        <br />
                <div><h1>What is your <span className="primary-color"> email address</span>?</h1></div>
                <br />
                                <input 
                            type="text"
                            className="text-input"
                            placeholder="jane@example.com"
                            onChange={this.handleUsernameChange}
                            style={{marginBottom: "10px"}}
                        />
            </div>    
        )
    }
}

class RegisterOrganization extends React.Component {

}

const mapStateToProps = (state) => {
    return {
        isMentor: state.isMentor
    };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);