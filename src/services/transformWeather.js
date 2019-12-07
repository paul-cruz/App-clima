import { WINDY } from '../constants/weathers';

const getWeatherState = weather => {
    return WINDY;
}

const transformWeather = (weather_data) => {
    const {temp, humidity} = weather_data.main; 
    const weatherState = getWeatherState(weather_data.weather);
    const {speed} = weather_data.wind;
    const data ={
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;