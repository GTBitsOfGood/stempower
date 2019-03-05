import React from 'react';
import ReactTable from 'react-table';

class DashboardMembers extends React.Component{

	render() {
		var data = []
		var columns = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg[0].members
			columns = [{
				Header: "Members Name",
				accessor: "member"
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
	)};

}


export default DashboardMembers;