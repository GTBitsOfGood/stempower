import React from 'react';

var axios = require('axios');

class DownloadDocument extends React.Component {
    constructor(props) {
        super(props)
    }

    /* 
    Currently hardcoded to only get first document
    Should be changed depending on how this is implemented in the future
    */
    onDownloadFile() {
    	axios.get('/api/documents').then(function(docs) {
    		var route = docs.data[0]._id;
	    	axios.get(`/api/documents/${route}`).then(function(file) {
		        var elem = document.createElement('a');
		        elem.href = file;
		        elem.download = docs.data[0].fileName;        
		        document.body.appendChild(elem);
		        elem.click();        
		        document.body.removeChild(elem);
		    });
    	});
    }

    render() {
    return (
    		<div>
			<button onClick={this.onDownloadFile}>Download File</button>
        	</div>
        )
    }
}

export default DownloadDocument;
