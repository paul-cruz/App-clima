import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    STORM,
    SNOW,
    WINDY,
    ECLIPSE
} from './../../constants/weathers';

import './styles.css';

const stateToIconName = (weatherState) => {
    switch (weatherState) {
        case CLOUD:
            return ("cloud");
        case STORM:
            return ("day-sleet-storm");
        case SNOW:
            return ("day-snow");
        case WINDY:
            return ("day-windy");
        case ECLIPSE:
            return ("solar-eclipse");
        default:
            return ("day-sunny");
    }
};

const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="4x" />);
};


const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div className="weatherTemperatureCont">
            {getWeatherIcon(weatherState)}
            <span className="temperature"> {`${temperature}`}</span>
            <span className="unity">°C</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;
