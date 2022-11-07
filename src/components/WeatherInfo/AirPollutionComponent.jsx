import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import './WeatherInfo.css';

function AirPollutionComponent({component, isDataAvailable}) {

    if (isDataAvailable) {
        return (
            <div style={{marginBottom: "20px"}}>
                <AiOutlineInfoCircle className="air-pollution-info"/>
                <span key={component[0]}>{component[0]}: <b>{component[1]}</b> μg/m3</span>
            </div>
        )
    } else {
        return (
            <div style={{marginBottom: "20px"}}>
                <AiOutlineInfoCircle className="air-pollution-info"/>
                <span key={component}>{component}: </span>
            </div>
        )
    }
}

export {AirPollutionComponent};