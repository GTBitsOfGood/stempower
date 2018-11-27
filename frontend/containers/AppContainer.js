import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Login from '../components/Login';
import Register from '../components/Register';
// import RegisterContainer from './RegisterContainer'

import {setCredentials, toggleRegister} from '../actions';

const AppContainer = ({ title, register, regStep, profile, mentor, organization, org, dashboard, setCredentials,  toggleRegister}) => {
    return (
        <div style={{height:"600px",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            {title ? <Title name={title}/> : <div></div>}
            {(register || profile || organization || dashboard) ? <div></div> : <div className="page-container"><Login setCredentials={setCredentials} toggleRegister={toggleRegister}/></div>}
            {register ? <div className="page-container"><Register regStep={regStep} setCredentials={setCredentials} toggleRegister={toggleRegister}/></div> : <div></div> }
            {profile   ? <div className="page-container"><Mentor profile={mentor}/></div> : <div></div>}
            {organization ? <div className="page-container">This is the Organization Page</div> : <div></div>}
            {dashboard ? <div className="page-container">This is the Dashboard Page</div> : <div></div>}
        </div>
    );
};

class UserForm extends React.Component {
    constructor(props){
        super(props)
    }
}

class Mentor extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <div>{this.props.mentor.name}'s Profile</div>
            <div><label>Name:</label><span>{this.props.mentor.name}</span></div>
            <div><label>Name:</label><span>{this.props.mentor.name}</span></div>
            <div><label>Name:</label><span>{this.props.mentor.name}</span></div>
            </div>
        )
    }
}

/* TODO Use this*/
AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        title: state.title, 
        register: state.register,
        mentor: state.mentor,
        regStep: state.regStep
    };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        setCredentials: (creds) => {dispatch(setCredentials(creds))},
        toggleRegister: () => {dispatch(toggleRegister())}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
