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

    return (
        <div className="input-wrapper">
            <div className="input-box">
                <div className="input">
                    <span>Latitude: </span>
                    <input 
                        type="number" 
                        name="latitude"
                        min="-90" 
                        max="90"
                        backgroundColor="#d1d1d1" 
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}/>
                </div>
                <div className="input">
                    <span>Longitude: </span>
                    <input 
                        type="number" 
                        name="longitude" 
                        min="-180" 
                        max="180"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}/>
                </div>
                <Button className="button" variant="outlined" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}

export {UserInput};