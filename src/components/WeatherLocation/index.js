import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { CLOUD } from './../constants/weathers';

const data = {
    temperature: 20,
    weatherState: CLOUD,
    humidity: 10,
    wind: '10 m/s'
};

const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <Location city={'Ciudad de México'}></Location>
            <WeatherData data={data}></WeatherData>
        </div>
    );
};

export default WeatherLocation;
