import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { CLOUD, WINDY } from './../constants/weathers';

const data = {
    temperature: 20,
    weatherState: CLOUD,
    humidity: 10,
    wind: '10 m/s'
};


class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            data: data,
            city: 'Ciudad de México'
        };
    }

    handleUpdateClick = () => {
        const newdata = {
            temperature: 19,
            weatherState: WINDY,
            humidity: 5,
            wind: '15 m/s'
        };
        this.setState({
            data: newdata
        });
        console.log("Actualizado");
    }

    render = () => {
        return (
            <div className="weatherLocationCont">
                <Location city={this.state.city}></Location>
                <WeatherData data={this.state.data}></WeatherData>
                <button onClick = {this.handleUpdateClick} className  = "Upbutton">Actualizar</button>
            </div>
        );
    };
};

export default WeatherLocation;
