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
	                formData.append("image", file);
	                axios.post('/api/documents', formData, { headers: {'Content-Type': 'multipart/form-data' }
    				});
                }
    		}
    	}
    }

    onFileChange() {
        var listOfFiles = document.getElementById("documentToUpload");
        document.getElementById('uploadLabel').innerHTML = listOfFiles.files[0].name;
    }

    render() {
    return (
    		<div>
            <div><label className="documentUploadButton btn-primary" id="uploadLabel"> Choose files
        	<input type="file" id="documentToUpload" onChange={this.onFileChange} multiple></input>
            </label></div>
			<div><button className="documentButton btn-primary" onClick={this.onSubmitFile}>Upload File</button></div>
        	</div>
        )
    }
}

export default UploadDocument;