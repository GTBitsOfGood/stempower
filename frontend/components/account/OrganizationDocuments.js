import React from 'react';
import UploadDocument from '../UploadDocument';
import DownloadDocument from '../DownloadDocument';
import PropTypes from 'prop-types';

class OrganizationDocuments extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
    return (
        <div>
        <h2>Documents</h2>
        <ul>
            <a><li>Organization Application</li></a>
            <UploadDocument label = "organizationApplication" />
            <DownloadDocument />
            <a><li>Feedback</li></a>
            <UploadDocument label = "feedback"/>
            <DownloadDocument />
            <a><li>Waiver</li></a>
            <UploadDocument label = "waiver"/>
            <DownloadDocument />
            <a><li>Upload Photos</li></a>
            <UploadDocument label = "uploadPhoto"/>
            <DownloadDocument />
        </ul>
        </div>
    )};

}


export default OrganizationDocuments;
