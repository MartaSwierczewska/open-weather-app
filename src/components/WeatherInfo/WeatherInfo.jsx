import React from 'react';
import {useState, useEffect} from "react";
import {extractComponents, airComponents, transformAirQualityIndex, fetchOpenWeatherData} from "../../services/OpenWeatherService";
import './WeatherInfo.css';

function WeatherInfo({latitude, longitude}) {

    const [airQualityIndex, setAirQualityIndex] = useState('submit data to check');
    const [airPollutionData, setAirPollutionData] = useState(null);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if(latitude && longitude){
            fetchOpenWeatherData(latitude, longitude)
            .then(result => {
                if (Object.keys(result).length === 0) {
                    setError(true)
                    return
                }
                setAirQualityIndex(transformAirQualityIndex(result))
                setAirPollutionData(extractComponents(result))
            }).catch(() => setError(true))
        } else {
            setAirQualityIndex('submit data to check');
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
                {airQualityIndex}
            </div>
            <div className="weather-info-box">
                <h4>AIR POLLUTION DATA</h4>
                {console.log(airPollutionData)}
                {airPollutionData ?
                airPollutionData.map((k) => {
                    return <p key={k[0]}>{k[0]}: <b>{k[1]}</b> μg/m3</p>
                }):
                airComponents.map((k) => {
                    return <p key={k}>{k}: </p>
                })}
            </div>
        </div>
    )
}

export {WeatherInfo};