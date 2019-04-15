import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardModifyDocumentTypes extends React.Component{

	constructor(props){
        super(props);
        this.state = {currentTypeToDelete: {type: "None"}, typeAction: "add", ownerType: "mentor"}
    }

    makeDeleteDropdowns(documentTypes) {
    	let children = []
    	for (let documentType in documentTypes) {
   			documentType = documentTypes[documentType];
			if (documentType.ownerType == this.state.ownerType){
				let dropdown = React.createElement("Button", {key: documentType.type, onClick: () => this.setState({currentTypeToDelete: documentType})}, documentType.type)    		
   				children.push(dropdown)
    		}
    	}
    	return(React.createElement("div", {}, children))
    }

	render() {
		let self = this

		if (this.state.typeAction == "add") {
			return(
				<div>
					Choose Action
					<div>
						<input type="radio" defaultChecked name="typeAction" onClick={() => this.setState({typeAction: "add"})}/>Add 
						<input type="radio" name="typeAction" onClick={() => this.setState({typeAction: "delete"})}/>Delete
					</div>
					Choose Owner Type
					<div>
						<input type="radio" defaultChecked name="ownerType" onClick={() => this.setState({ownerType: "mentor"})}/>Mentor
	  					<input type="radio" name="ownerType" onClick={() => this.setState({ownerType: "leader"})}/>Leader
	  					<input type="radio" name="ownerType" onClick={() => this.setState({ownerType: "member"})}/>Member
	  				</div>
	  				<input type="text" id="documentType" defaultValue="Document Type"/>
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
				</div>
			)
		} else {
			return(
				<div>
					Choose Action
					<div>
						<input type="radio" defaultChecked name="typeAction" onClick={() => this.setState({typeAction: "add"})}/>Add 
						<input type="radio" name="typeAction" onClick={() => this.setState({typeAction: "delete"})}/>Delete
					</div>
					Choose Owner Type
					<div>
						<input type="radio" defaultChecked name="ownerType" onClick={() => this.setState({ownerType: "mentor"})}/>Mentor
	  					<input type="radio" name="ownerType" onClick={() => this.setState({ownerType: "leader"})}/>Leader
	  					<input type="radio" name="ownerType" onClick={() => this.setState({ownerType: "member"})}/>Member
	  				</div>
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
				 	Select Document Type to Delete
					{this.makeDeleteDropdowns(this.props.currentDocumentTypes)}
				</div>
			)
		}
	};	
}

export default DashboardModifyDocumentTypes;