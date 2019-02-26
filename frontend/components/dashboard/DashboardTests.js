import React from 'react';
import axios from 'axios';

class DashboardTests extends React.Component{

	makeOrganizations() {
		var newOrg = {
			name: "dummy",
			leaders: [{"leader": "dummyleader"}, {"leader": "dummyleader2"}],
			address: "fakeAdress",
			members: [{"member": "fakeMember1"}, {"member": "fakeMember2"}],
			mentors: ["5bb3c0d3da2944b054ca39bf"]
		}
		axios.post('/api/organizations', newOrg);
	}

	render() {
		return(
			<div>
				<button onClick = {this.makeOrganizations}>Make dummy organization</button>
			</div>
	)};

}


export default DashboardTests;