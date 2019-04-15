import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardModifyDocumentTypes extends React.Component{

	constructor(props){
        super(props);
        this.state = {currentTypeToDelete: {type: "None"}, showDropDowns: false, ownerType: "mentor"}
    }

    makeDeleteDropdowns(documentTypes, show) {
    	if (show) {
    	let children = []
    		for (let documentType in documentTypes) {
    			documentType = documentTypes[documentType];
    			let dropdown = React.createElement("Button", {key: documentType.type, onClick: () => this.setState({currentTypeToDelete: documentType})}, documentType.type)    		
    			children.push(dropdown)
    		}
    		return(React.createElement("div", {}, children))
    	}
    }

	render() {
		let self = this
		return(
			<div>
				<input type="text" id="documentType" defaultValue="Document Type"/>
				<input type="radio" defaultChecked name="ownerType" onClick={() => this.setState({ownerType: "mentor"})}/>Mentor
  				<input type="radio" name="ownerType" onClick={() => this.setState({ownerType: "leader"})}/>Leader
  				<input type="radio" name="ownerType" onClick={() => this.setState({ownerType: "member"})}/>Member
				<button onClick={() => {
						let documentType = document.getElementById("documentType").value;
						if (documentType != "Document Type") {
							axios.post('/api/documentTypes', {"type": documentType, "ownerType": this.state.ownerType}).then((type) => {
								this.props.currentDocumentTypes.push(type.data);
								this.props.documentTypes(this.props.currentDocumentTypes);
							});
							document.getElementById("documentType").value = "Document Type";
						}
					}}>
					Add New Document Type</button>
				<div>
			 		{this.state.currentTypeToDelete.type}
			 		<button onClick={() => {
			 			if (this.state.currentTypeToDelete._id) {
			 				axios.delete('api/documentTypes', {documentType: this.state.currentTypeToDelete.type})
			 				this.setState({currentTypeToDelete: {type: "None"}})
			 				this.props.currentDocumentTypes.splice(this.props.currentDocumentTypes.indexOf(this.state.currentTypeToDelete), 1)
			 				this.setState({showDropDowns: !self.state.showDropDowns})
			 				this.props.documentTypes(this.props.currentDocumentTypes)
			 			}
			 		}}>
			 		Delete Document Type</button>
			 	</div>
			 	<button onClick={() => {this.setState({showDropDowns: !self.state.showDropDowns})}}>Select Document Type to Delete</button>
				{this.makeDeleteDropdowns(this.props.currentDocumentTypes, this.state.showDropDowns)}
			</div>

		)
	};	
}

export default DashboardModifyDocumentTypes;