import React from 'react';
import ReactTable from 'react-table';

class DashboardMentorDocuments extends React.Component{

	render() {

		var columns = []
		var data = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg.mentors
			columns = [{
				Header: "Mentor Name",
				Cell: ({original}) => React.createElement("a", {href: "/profile/" + original._id}, original.firstName + " " + original.lastName)
			}] 
			for (let documentType in this.props.documentTypes) {
				documentType = this.props.documentTypes[documentType]
				if (documentType.ownerType == "mentor") {
					columns.push({
						Header: documentType.type,
						Cell: ({original}) => {
							if (original[documentType.type]) {
								return(<a href={original[documentType.type]}>{documentType.type}</a>)
							} else {
								return(<div>None</div>)
							}
						}
					})
				}
			}
		}
		return(
			<div className = "col">
				<ReactTable
				defaultPageSize={10}
				data = {data}
				columns = {columns}
				/>
			</div>
		)
	};
		
}


export default DashboardMentorDocuments;