import React from 'react';
import {useState, useEffect} from "react";
import {extractComponents, transformAirQualityIndex, fetchOpenWeatherData} from "../../services/OpenWeatherService";
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
                    setError(true)
                    return
                }
                setAirQualityIndex(transformAirQualityIndex(result))
                setAirPollutionData(extractComponents(result))
            }).catch(() => setError(true))
        }
    }, [latitude, longitude])

    if (error) {
        return (
            <div>
                <h4>Something went wrong, please try again.</h4>
            </div>
        )
    }

    return (
        <div>
            <h4>AIR QUALITY INDEX</h4>
            {airQualityIndex}
            <h4>AIR POLLUTION DATA</h4>
            {airPollutionData &&
            airPollutionData.map((k) => {
                return <p>{k[0]}: {k[1]} μg/m3</p>
            })}
        </div>
    )
}

export {WeatherInfo};