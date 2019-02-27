import React from 'react';

class OrganizationDocuments extends React.Component{

   render() {
       return (
        <div>
            <h2 className="text-center">Documents</h2>

            <ul className="text-left">
                <a href='#'><li>Organization Application</li></a>
                <a href='#'><li>Feedback</li></a>
                <a href='#'><li>Waiver</li></a>
                <a href='#'><li>Upload Photos</li></a>
            </ul>
            <p className="text-center"><a  className="btn btn-primary" href="/mentors" role="button">View Documents &raquo;</a></p>

        </div>
   )};

}


export default OrganizationDocuments;
