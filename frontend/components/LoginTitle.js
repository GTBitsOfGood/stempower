import React from 'react';
import PropTypes from 'prop-types';

const LoginTitle = ( { name } ) => {
    return (
        <form>
		<input type="button" value="Login" onclick="window.location.href='http://localhost:3000/api/login'" />
		</form>
    );
};

LoginTitle.propTypes = {
    name: PropTypes.string,
};


export default LoginTitle;