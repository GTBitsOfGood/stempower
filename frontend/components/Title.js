import React from 'react';
import PropTypes from 'prop-types';

const Title = ( { name } ) => {
    return (
        <div>
        	<form>
        	<input type="text"></input>
        	</form>
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
