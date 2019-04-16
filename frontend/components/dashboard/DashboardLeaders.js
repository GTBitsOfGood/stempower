import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardLeaders extends React.Component{

	render() {
		var data = []
		var columns = []
		if (this.props.currentOrganization != null) {
			var currentOrg = this.props.currentOrganization
			data = currentOrg.leaders
			columns = [{
				Header: "Leaders Name",
				accessor: "leader"
			}, {
				width: 50,
				Header: "",
				Cell: ({original}) => ( <button onClick={() => {
					currentOrg.leaders.splice(currentOrg.leaders.indexOf(original), 1)
					axios.delete('/api/organizations/' + currentOrg._id + "/leaders/" + original._id)
					this.forceUpdate();
				}}>
				X
				</button> )
			}] 
		}
		return(
			<div className="col">
				<br />
				<ReactTable
				defaultPageSize = {10}
				data = {data}
				columns = {columns}
				/>
			</div>
	)};

}


export default DashboardLeaders;