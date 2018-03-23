
import React from 'react';
import PropTypes from 'prop-types';

const Title = ( { name } ) => {
    return (
        <form>
		<input type="button" value="Member Page" onclick="window.location.href='http://localhost:3000/api/memberpage'" />
		</form>
    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
