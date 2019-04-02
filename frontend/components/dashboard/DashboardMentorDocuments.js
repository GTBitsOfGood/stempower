import React from 'react';
import ReactTable from 'react-table';

class DashboardMentorDocuments extends React.Component{

	render() {

		//Documents can be searched by organizatio or mentor 
		var columns = []
		var data = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg.mentors
			columns = [{
				Header: "Mentor Name",
				Cell: ({original}) => React.createElement("a", {href: "/profile/" + original._id}, original.firstName + " " + original.lastName)
			}, {
				Header: "Pre Survey",
				Cell: ({original}) => {
					if (original.presurvey) {
						return(<button onClick={function() {console.log(original._id)}}>{original.presurvey.fileName}</button>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Organization Feedback",
				Cell: ({original}) => {
					if (original.organizationfeedback) {
						return(<button onClick={function() {console.log(original._id)}}>{original.organizationfeedback.fileName}</button>)
					} else {
						return(<div>None</div>)
					}
				}
			}]
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