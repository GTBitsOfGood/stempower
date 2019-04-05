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

<<<<<<< HEAD
    render(){
        return(
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav-sidebar">
                    <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Troop 29303</a></li>
                    <li><a href="#">Troop 29101</a></li>
                    <li><a href="#">Organization 3</a></li>
                    <li><a href="">Example Org</a></li>
                    <li><a href="">Organizatoin 4</a></li>
                  </ul>
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 className="page-header"><br /> </h1>
=======
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
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba


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