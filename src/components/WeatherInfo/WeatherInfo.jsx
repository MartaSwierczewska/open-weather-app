import React from 'react';
import {useState, useEffect} from "react";
import {
    extractComponents, 
    airComponents, 
    transformAirQualityIndex, 
    getAirQualityIndexStyle, 
    fetchOpenWeatherData} from "../../services/OpenWeatherService";
import { AirPollutionComponent } from './AirPollutionComponent';
import './WeatherInfo.css';

function WeatherInfo({latitude, longitude}) {

    const [airQualityIndex, setAirQualityIndex] = useState(null);
    const [airPollutionData, setAirPollutionData] = useState(null);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if(latitude && longitude){
            fetchOpenWeatherData(latitude, longitude)
            .then(result => {
                if (Object.keys(result).length === 0) {
                    setError(true);
                    return;
                }
                setAirQualityIndex(result['list'][0]['main']['aqi']);
                setAirPollutionData(extractComponents(result));
            }).catch(() => setError(true))
        } else {
            setAirQualityIndex(null);
            setAirPollutionData(null);
        }
    }, [latitude, longitude])

    if (error) {
        return (
            <div className="weather-info-wrapper">
                <h4>Something went wrong, please try again.</h4>
            </div>
        )
    }

    return (
        <div className="weather-info-wrapper">
            <div className="weather-info-box">
                <h4>AIR QUALITY INDEX</h4>
                {airQualityIndex &&
                <p className={getAirQualityIndexStyle(airQualityIndex)}><b>{transformAirQualityIndex(airQualityIndex)}</b></p>}
                <p>Follow <a href="https://en.wikipedia.org/wiki/Air_quality_index#CAQI" target="_blank" rel="noreferrer">this link</a> to learn more about calculation of Air Quality index.</p>
            </div>
            <div className="weather-info-box">
                <h4>AIR POLLUTION DATA</h4>
                {airPollutionData ?
                    airPollutionData.map((k) => {
                        return <AirPollutionComponent key={k} component={k} isDataAvailable={true}/>
                    }):
                    airComponents.map((k) => {
                        return <AirPollutionComponent key={k} component={k} isDataAvailable={false}/>
                    })}
            </div>
        </div>
    )
}

export {WeatherInfo};