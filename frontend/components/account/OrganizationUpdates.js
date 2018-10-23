import React from 'react';

class OrganizationUpdates extends React.Component{

   render() {
       return (
        <div>
            <h2>Updates!</h2>
            <p  className="text-danger">{this.props.waiversNeeded} members still need to upload participation waivers!</p>
            <p> </p>
            <p><a  className="btn btn-primary" href="#" role="button">Contact Your Mentors &raquo;</a></p>
        </div>
   )};

}


export default OrganizationUpdates;
