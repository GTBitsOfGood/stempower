import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardMembers extends React.Component{

	render() {
		var data = []
		var columns = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg.members
			columns = [{
				Header: "Members Name",
				accessor: "member"
			}, {
				width: 50,
				Header: "",
				Cell: ({original}) => ( <button onClick={() => {
					currentOrg.members.splice(currentOrg.members.indexOf(original), 1)
					axios.delete('/api/organizations/' + currentOrg._id + "/members/" + original._id)
					this.forceUpdate();
				}}>
				X
				</button> )
			}] 
		}
		return(
			<div className="col">
				<ReactTable
				defaultPageSize = {10}
				data = {data}
				columns = {columns}
				/>
			</div>
	)};

}


export default DashboardMembers;