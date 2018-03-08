import React from 'react';
import PropTypes from 'prop-types';

const Title = ( { name } ) => {
    return (
        <form>
		<input type="button" value="Login" onclick="window.location.href='http://localhost:3000/api/login'" />
		</form>
    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;