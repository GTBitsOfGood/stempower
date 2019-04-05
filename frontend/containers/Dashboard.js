import React from 'react';
import axios from 'axios';
import 'react-table/react-table.css'

import DashboardOrganizations from "../components/dashboard/DashboardOrganizations";
import DashboardMembers from "./../components/dashboard/DashboardMembers";
import DashboardMentors from "./../components/dashboard/DashboardMentors";
import DashboardTests from "./../components/dashboard/DashboardTests";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {organizations: null, currentOrganization: null}
    }

    componentDidMount() {
        axios.get('/api/organizations').then((organization) => {
            let organizationsList = [];
            for (let x = 0; x < organization.data.length; x++) {
                let currentOrg = organization.data[x];

                let mentors = [];
                for (let i = 0; i < currentOrg.mentors.length; i++) {
                    let stri = '/api/mentors/' + currentOrg.mentors[i];
                    axios.get(stri).then((info) => {
                        mentors.push(info.data);
                    });
                }

                let org = [];
                org.push(currentOrg);
                org.push(mentors);
                organizationsList.push(org);
            }
            this.setState({organizations: organizationsList});
            this.setState({currentOrganization: organizationsList[0]});
        });
    }


    render(){
        return(
            <div className = "container">
                <DashboardTests number = {this.number}/>
                <DashboardOrganizations organizations = {this.state.organizations} currentOrganization={org => this.setState({currentOrganization: org})}/>
                <DashboardMentors currentOrganization = {this.state.currentOrganization}/>
                <DashboardMembers currentOrganization = {this.state.currentOrganization}/> 
            </div>
        )
    }
}

export default Dashboard;