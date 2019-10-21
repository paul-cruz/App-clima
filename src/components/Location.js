import React from 'react'

const Location = (props) => {
    const { city } = props; //const city = props.city; se debn llamar igual Destructuring

    return (
        <div>
            <h1> {city} </h1>
        </div>
    );
}

export default Location;