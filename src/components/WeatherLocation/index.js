import React, { Component } from 'react';
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

class WeatherLocation extends Component {
    render = () => {
        return (
            <div className="weatherLocationCont">
                <Location city={'Ciudad de México'}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    };
};

export default WeatherLocation;
