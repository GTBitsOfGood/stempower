import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


export class MemberPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            college: '',
            year: '',
            bio: ''
        };
    }

    componentWillMount() {
        axios.get('/api/mentors/1').then(({ data }) => {
            console.log(data.mentor);
            const mentor = data.mentor;
            this.setState({name: mentor.name, college: mentor.college, year: mentor.year, bio: mentor.bio})

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
                    </tr>
                    </tbody>
                </table>
            </div> 
        );
    }
};


export default MemberPage;