import React from 'react';
import {useState} from "react";
import { Button } from "@mui/material";
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
                            <span>Latitude: </span>
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
                            <span>Longitude: </span>
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
                        <input type="submit" value="Submit"/>
                        <button style={{marginLeft: "20px"}} onClick={resetData}>Reset</button>
                        {/* <Button type="submit" value="Submit" className="button" variant="outlined" onClick={handleSubmit}>Submit</Button> */}
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export {UserInput};