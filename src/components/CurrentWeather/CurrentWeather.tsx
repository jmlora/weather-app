import React, { useReducer } from 'react';
import { getFetch } from '../../api/baseFetch';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {WeatherResults} from '../WeatherResults/WeatherResults';
import {IWeatherData} from '../../interfaces/IWeatherData';
import {reducer, initialState} from './CurrentWeatherReducer';
import styles from './CurrentWeather.module.scss';

const apiKey = '18e669f92b4fbf3c7d3b5f4da12e7117';

function CurrentWeather() {
  const handleCityChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch({type: 'SET_CITY', payload: {city: event.target.value}})//setCity(event.target.value)
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchCityWeather() {
    let data = await getFetch<IWeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${state.city},es&appid=${apiKey}&units=metric`);
    dispatch({type: 'SET_WEATHER', payload: {weather: data}})
  }

  return (
    <div className={styles.wrapper}>
        <h1>
          Current Weather in Spain
        </h1>
        <div className={styles.formContainer}>
          <Input type="text" value={state.city as string} onChange={handleCityChange} placeholder="Enter your city" />
          <Button type="button" onClick={fetchCityWeather}>GET CURRENT WEATHER</Button>
        </div>
        <div>
          {state.weather && <WeatherResults city={state.city} data={state.weather as IWeatherData} />}
        </div>
    </div>
    )
}

export {CurrentWeather};