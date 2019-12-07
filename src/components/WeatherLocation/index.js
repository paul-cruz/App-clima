import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather'

const LOCATION = 'Mexico City,mx'
const APIKEY = '6c7131d55ffca39c24563132be4d3bf2'
const urlapiweather = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${APIKEY}`;

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            data: null,
            city: 'Ciudad de México'
        };
    }

    handleUpdateComponent = () => {
        fetch(urlapiweather).then(data =>{
            console.log(data);
            return data.json();
        }).then(weatherdata => {
            console.log(weatherdata);
            const newdata = transformWeather(weatherdata);
            return newdata;
        }).then( newdata =>{
            this.setState({
                data: newdata
                })
            }
        );
        console.log("Actualizado");
    }

    UNSAFE_componentWillMount() {
        this.handleUpdateComponent();
    }
    
    render = () => {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data?
                <WeatherData data={data}/>
                :'Cargando...'}
            </div>
        );
    };
};

export default WeatherLocation;
