import React from 'react';
import { connect } from 'react-redux';


class BioItem extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
           bioInfo: props.bioInfo
        }
    }
    
    render() {
        return (
            <div>
                <h4>{this.state.bioInfo.title}</h4>
                <p>{this.state.bioInfo.description}</p>
            </div>
        )
    }
};

const mapStateToProps = state => {
	return {
        bioInfo: state.bioInfo
    };
}

export default connect(mapStateToProps)(BioItem);