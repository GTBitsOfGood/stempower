import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardMentors extends React.Component{

	render() {
		var columns = []
		var data = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg[1]
			columns = [{
				Header: "Mentors Name",
				accessor: "firstName"
			}]
		}
		return(
			<div className = "container">
				<ReactTable
				defaultPageSize={10}
				data = {data}
				columns = {columns}
				/>
			</div>
		)
	};
		
}


export default DashboardMentors;