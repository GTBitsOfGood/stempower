import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Registration from './Registration';
import Navbar from '../components/Navbar';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            page: "Application"
        }
    }

    routePage(page) {
        switch(page){
            case "Profile":
                return(<Profile />)
            case "Registration":
                return(<Registration />)
            default:
                return(<MentorApplication />)        
        }
    }

    //<Navbar style={{float:"right"}} />

    render() {
        return (
            <div>
                <Title name={name} />
                <Navbar />
                {this.routePage(this.state.page)}
            </div>
        );    
    }
    
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
