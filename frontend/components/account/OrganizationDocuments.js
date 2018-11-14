import React from 'react';
import UploadDocument from '../UploadDocument';
import DownloadDocument from '../DownloadDocument';

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
            <UploadDocument />
            <DownloadDocument />
            <a><li>Feedback</li></a>
            <UploadDocument />
            <DownloadDocument />
            <a><li>Waiver</li></a>
            <UploadDocument />
            <DownloadDocument />
            <a><li>Upload Photos</li></a>
            <UploadDocument />
            <DownloadDocument />
        </ul>
        </div>
    )};

}


export default OrganizationDocuments;
