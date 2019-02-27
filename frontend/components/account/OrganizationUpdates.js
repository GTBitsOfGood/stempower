import React from 'react';

class OrganizationUpdates extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      value: this.props.waiversNeeded + ' members still need to upload participation waivers!'
	    };
	}

   render() {
       return (
        <div>
            <h2 className="text-center">Updates!</h2>
            <p> </p>
            <textarea className="text-danger" cols='25' rows='4' value={this.state.value}/>
            <p className="text-center"><a  className="btn btn-primary" href="#" role="button">View Updates &raquo;</a></p>
        </div>
   )};
}


export default OrganizationUpdates;
