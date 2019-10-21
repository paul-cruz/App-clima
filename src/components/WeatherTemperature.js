import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
    CLOUD,
    STORM,
    SNOW,
    WINDY,
    ECLIPSE
} from './constants/weathers'

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
}

const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="3x" />);
}


const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div>
            {getWeatherIcon(weatherState)}
            <span> {`${temperature}  C°`}</span>
        </div>
    );
}

export default WeatherTemperature;
