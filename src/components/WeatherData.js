import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import { CLOUD } from './constants/weathers'

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature temperature={22} weatherState={CLOUD} ></WeatherTemperature>
            <WeatherExtraInfo humidity={80} wind={'10 m/s'}></WeatherExtraInfo>
        </div>
    );
}

export default WeatherData;