import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { CLOUD, WINDY } from './../constants/weathers';

const LOCATION = 'Mexico City,mx'
const APIKEY = '6c7131d55ffca39c24563132be4d3bf2'
const urlapiweather = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${APIKEY}`;

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

    getWeatherState = weather => {
        return WINDY;
    }
    
    getData = (weather_data) => {
        const {temp, humidity} = weather_data.main; 
        const weatherState = this.getWeatherState(this.weather);
        const {speed} = weather_data.wind;
        const data ={
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    }
    
    
    handleUpdateClick = () => {
        fetch(urlapiweather).then(data =>{
            console.log(data);
            return data.json();
        }).then(weatherdata => {
            console.log(weatherdata);
            const newdata = this.getData(weatherdata);
            return newdata;
        }).then( newdata =>{
            this.setState({
                data: newdata
                })
            }
        );
        console.log("Actualizado");
    }

    render = () => {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick = {this.handleUpdateClick} className  = "Upbutton">Actualizar</button>
            </div>
        );
    };
};

export default WeatherLocation;
