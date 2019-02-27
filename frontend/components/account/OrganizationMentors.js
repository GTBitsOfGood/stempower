import React from 'react';

class OrganizationMentors extends React.Component{

   render() {
       return (
        <div>
            <h2 className="text-center">Mentors</h2>
            <div>
            	<textarea className="border border-dark" cols='10' rows='5' value="  Jane Doe"/>
            	<textarea className="border border-white" cols='1' />
            	<textarea className="border border-dark" cols='10' rows='5' value="   Joe Doe" />
            </div>
            <p className="text-center"><a  className="btn btn-primary" href="/mentors" role="button">Contact Your Mentors &raquo;</a></p>
        </div>
   )};
}


export default OrganizationMentors;
