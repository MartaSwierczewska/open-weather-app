import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {getAirComponentUrl} from "../../services/OpenWeatherService";
import './WeatherInfo.css';

function AirPollutionComponent({component, isDataAvailable}) {

    const handleClick = (componentName) => {
        window.open(getAirComponentUrl(componentName), "_blank")
    };

    if (isDataAvailable) {
        return (
            <div style={{marginBottom: "20px"}}>
                <AiOutlineInfoCircle className="air-pollution-info" onClick={() => handleClick(component[0])}/>
                <span key={component[0]}>{component[0]}: <b>{component[1]}</b> μg/m3</span>
            </div>
        )
    } else {
        return (
            <div style={{marginBottom: "20px"}}>
                <AiOutlineInfoCircle className="air-pollution-info" onClick={() => handleClick(component)}/>
                <span key={component}>{component}: </span>
            </div>
        )
    }
}

export {AirPollutionComponent};