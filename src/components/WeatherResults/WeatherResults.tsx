import React from 'react';
import {IWeatherData} from '../../interfaces/IWeatherData';

type WeatherResultsProps = {
    city: string,
    data: IWeatherData
}

function WeatherResults({
    city,
    data,
}:WeatherResultsProps):JSX.Element {
    return (
        <div>
            <div>The weather in {city}, ({data?.sys.country}) is {data?.weather[0].description}</div>
            <div>
                <img alt="weather icon" src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} />
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Temperature</td>
                            <td>{data?.main.temp} ºC</td>
                        </tr>
                        <tr>
                            <td>Min temperature</td>
                            <td>{data?.main.temp_min} ºC</td>
                        </tr>
                        <tr>
                            <td>Max temperature</td>
                            <td>{data?.main.temp_max} ºC</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{data?.main.pressure} hPa</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{data?.main.humidity}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export {WeatherResults};