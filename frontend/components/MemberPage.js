import React from 'react';
import PropTypes from 'prop-types';

const MemberPage = () => {
    return (
    	<center>
        <div id="container">
        	<table id="table">
        		<tbody>
        		<tr id="first_row">
        		<td id="one_column" colSpan="2">
        		<div className="rectangle" style={{ width:'200px', height:'200px', border: '1px solid #000'}}></div>
        			<h1>Devany Sandoval</h1>
        		</td>
        		</tr>
        		<tr id="second_row">
        		<td id="two_column">
        			College: Georgia Institute of Technology <br/>
        			Year: 3rd
        		</td>
        		</tr> <br/>

        		<tr id="third_row">
        		<td id="fourth_coulmn" colSpan="2"> 
        			Hi! I am a third year Computer Science at Georgia Tech! I am getting a certificate in Inofrmation Internetworks and Intelligence! 
        			When I am not doing school work, I like to work out, hang out with friends, listen to an audio book or watch some Netflix. In high school,
        			I played on the Varsity tennis team and ran Cross Country.
        				
        		</td>
        		</tr>
        		</tbody>
        	</table>
        </div>
        </center>
    );
};


export default MemberPage;