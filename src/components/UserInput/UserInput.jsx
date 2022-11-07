import React from 'react';
import {useState} from "react";
import './UserInput.css';

function UserInput({setUserInput}) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserInput(latitude, longitude)
    }

    const resetData = () => {
        setLatitude('');
        setLongitude('');
    }

    return (
        <div className="center">
            <div className="input-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label>
                            <p>Latitude <span style={{fontSize: "14px"}}>(-90, 90): </span></p>
                            <input
                                type="number" 
                                step="0.000001"
                                name="latitude"
                                min="-90" 
                                max="90"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}/>
                        </label>
                    </div>
                    <div className="input-box">
                        <label>
                            <p>Longitude <span style={{fontSize: "14px"}}>(-180, 180): </span></p>
                            <input 
                                type="number" 
                                step="0.000001"
                                name="longitude" 
                                min="-180" 
                                max="180"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}/>
                        </label>
                    </div>
                    <div className="center">
                        <input className="input-button" type="submit" value="Submit"/>
                        <button className="input-button" style={{marginLeft: "20px"}} onClick={resetData}>Reset</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export {UserInput};