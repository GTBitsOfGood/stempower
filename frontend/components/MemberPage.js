import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AddBioInfo from  './AddBioInfo';

export class MemberPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            college: '',
            year: '',
            //bio: '',
            bioInfos: {}
        };
    }

    /*addBioInfo(header, content) {
        this.setState(this.state, {content: content});
    } */

    componentWillMount() {
        axios.get('/api/mentors/1').then(({ data }) => {
            console.log(data.mentor);
            const mentor = data.mentor;
            this.setState({name: mentor.name, college: mentor.college, year: mentor.year, bioInfos: mentor.bioInfos})//, bio: mentor.bio})
        })
    }

    render() { //mostly do HTML in render 
        return (
            <div id="container">
                <table id="table">
                    <tbody>
                    <tr id="first_row">
                    <td id="one_column" colSpan="2">
                    <div className="rectangle" style={{ width:'200px', height:'200px', border: '1px solid #000'}}></div>
                        <h1>{ this.state.name }</h1>
                    </td>
                    </tr>
                    <tr id="second_row">
                    <td id="two_column">
                        College: { this.state.college }<br/>
                        Year: { this.state.year }
                    </td>
                    </tr><br/>
                    <tr id="third_row">
                    <td id="fourth_coulmn" colSpan="2"> { this.state.bio } </td>
                    </tr><br/>
                    <tr id = "fourth_row">
                        <td id = "fourth_row_column">
                             Why I joined StemPower...
                             <AddBioInfo />
                        </td>
                    </tr>
                    <tr id = "sixth_row">
                        <td id = "sixth_row_column">
                             My Background...
                             <AddBioInfo />
                        </td>

                    </tr>
                    <tr id = "seventh_row">
                        <td id = "seventh_row_column">
                             My message to my troop...
                             <AddBioInfo />
                        </td>
                    </tr>
                    <tr id = "fifth_row">
                        <td id = "fifth_row_column">
                             Fun Facts about me...
                              <AddBioInfo />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};


export default MemberPage;