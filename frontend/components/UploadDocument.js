import React from 'react';
import PropTypes from 'prop-types';

var axios = require('axios');

class UploadDocument extends React.Component {
    constructor(props){
        super(props);
        this.onSubmitFile = this.onSubmitFile.bind(this);
    }

    onSubmitFile(props) {
    	var listOfFiles = document.getElementById(this.props.label);
    	if (listOfFiles.value != "") {
    		if (listOfFiles.files.length != 0) {
    			for (var i = 0; i < listOfFiles.files.length; i++) {
    				var formData = new FormData();
	                var file = listOfFiles.files[i];
	                formData.append("image", file);
                    formData.append("label", this.props.label)
	                axios.post('/api/documents', formData, { headers: {'Content-Type': 'multipart/form-data' }});
                }
    		}
    	}
    }

    onFileChange() {
/*        var listOfFiles = document.getElementById("documentToUpload");
        document.getElementById('uploadLabel').textContent = listOfFiles.files[0].name;*/
    }

    render() {
    return (
    		<div>
            <div><label className="documentUpload btn-primary" id="uploadLabel"> Choose files
        	<input type="file" className="documentUploadButton" id={this.props.label} onChange={this.onFileChange} multiple></input>
            </label></div>
			<div><button className="documentButton btn-primary" onClick={this.onSubmitFile}>Upload File</button></div>
        	</div>
        )
    }
}

export default UploadDocument;