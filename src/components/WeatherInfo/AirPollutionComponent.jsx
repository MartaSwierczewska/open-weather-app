import React from 'react';
import './WeatherInfo.css';

function AirPollutionComponent({component, isDataAvailable}) {

    if (isDataAvailable) {
        return (
            <div>
                <p key={component[0]}>{component[0]}: <b>{component[1]}</b> μg/m3</p>
            </div>
        )
    } else {
        return (
            <div>
                <p key={component}>{component}: </p>
            </div>
        )
    }
}

export {AirPollutionComponent};