import React from 'react';
import ReactTable from 'react-table';

class DashboardLeaderDocuments extends React.Component{

	render() {

		var columns = []
		var data = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg.leaders
			columns = [{
				Header: "Leader Name",
				accessor: "leader"
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
				Header: "Media Release",
				Cell: ({original}) => {
					if (original.mediarelease) {
						return(<button onClick={function() {console.log(original._id)}}>{original.mediarelease.fileName}</button>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Member Waiver",
				Cell: ({original}) => {
					if (original.waiver) {
						return(<button onClick={function() {console.log(original._id)}}>{original.waiver.fileName}</button>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Feedback",
				Cell: ({original}) => {
					if (original.memberfeedback) {
						return(<button onClick={function() {console.log(original._id)}}>{original.feedback.fileName}</button>)
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


export default DashboardLeaderDocuments;