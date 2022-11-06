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
        <div className="input-box">
            <form onSubmit={handleSubmit}>
                <label>
                    <p style={{display: "inline", width: "30px"}}>Latitude: </p>
                    <input 
                        type="number" 
                        name="latitude"
                        min="-90" 
                        max="90"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}/>
                </label>
                <br/><br/>
                <label>
                    <p style={{display: "inline"}}>Longitude: </p>
                    <input 
                        type="number" 
                        name="longitude" 
                        min="-180" 
                        max="180"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}/>
                </label>
                <br/><br/>
                {/* <input type="submit" value="Submit"/> */}
                <Button className="button" variant="outlined" onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
}

export {UserInput};