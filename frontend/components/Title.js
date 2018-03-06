import React from 'react';
import PropTypes from 'prop-types';

const Title = ( { name } ) => {
    return (
  		<button onClick={handleClick}>Member Page</button>
    );

    function handleClick(e) {
   		e.preventDefault();
   		console.log('The link was clicked.');
   		return document.location = '/memberpage';
  	}
  		
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
