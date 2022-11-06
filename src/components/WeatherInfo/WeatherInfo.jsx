import React from 'react';
import {useState, useEffect} from "react";
import {fetchOpenWeatherData} from "../../services/OpenWeatherService";
import './WeatherInfo.css';

function WeatherInfo({latitude, longitude}) {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if(latitude && longitude){
            fetchOpenWeatherData(latitude, longitude)
            .then(result => {
                if (Object.keys(result).length === 0) {
                    setError(true)
                    return
                }
                setResponse(result)
            }).catch(() => setError(true))
        }
    }, [latitude, longitude])

    if (error) {
        return (
            <div className={"app"}>
                <div className={"progress-bar"}>
                    <h4>Something went wrong, please try again.</h4>
                </div>
            </div>)
    }

    console.log(response)

    return (
        <div className="app">
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
        </div>
    )
}

export {WeatherInfo};