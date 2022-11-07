import React from 'react';
import {IconContext} from "react-icons";
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
                <IconContext.Provider value={{className: 'air-pollution-info'}}>
                    <AiOutlineInfoCircle onClick={() => handleClick(component[0])}/>
                </IconContext.Provider>
                <span key={component[0]}>{component[0]}: <b>{component[1]}</b> μg/m3</span>
            </div>
        )
    } else {
        return (
            <div style={{marginBottom: "20px"}}>
                <IconContext.Provider value={{className: 'air-pollution-info'}}>
                    <AiOutlineInfoCircle onClick={() => handleClick(component)}/>
                </IconContext.Provider>
                <span key={component}>{component}: </span>
            </div>
        )
    }
}

export {AirPollutionComponent};