import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
    const { city } = props; //const city = props.city; se debn llamar igual Destructuring

    return (
        <div>
            <h1> {city} </h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;