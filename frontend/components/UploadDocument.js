import React from 'react';

var axios = require('axios');

class UploadDocument extends React.Component {
    constructor(props){
        super(props)
    }

    onSubmitFile() {
    	var listOfFiles = document.getElementById("documentToUpload");
    	if (listOfFiles.value != "") {
    		if (listOfFiles.files.length != 0) {
    			for (var i = 0; i < listOfFiles.files.length; i++) {
    				var formData = new FormData();
	                var file = listOfFiles.files[i];
	                formData.append("file", file);
	                axios.post('/api/documents', formData, { headers: {'Content-Type': 'multipart/form-data' }
    				});
                }
    		}
    	}
    }

    render() {
    return (
    		<div>
        	<input type="file" id="documentToUpload" multiple></input>
			<button onClick={this.onSubmitFile}>Upload File</button>
        	</div>
        )
    }
}

export default UploadDocument;