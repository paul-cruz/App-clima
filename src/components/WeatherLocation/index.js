import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <Location city={'Ciudad de México'}></Location>
            <WeatherData></WeatherData>
        </div>
    );
};

export default WeatherLocation;
