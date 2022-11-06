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
        <div className="center">
            <div className="input-wrapper">
                <form>
                    <div className="input-box">
                        <label>
                            <span style={{display: "inline-block", width: "85px"}}>Latitude: </span>
                            <input
                                className="input"
                                type="number" 
                                name="latitude"
                                min="-90" 
                                max="90"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}/>
                        </label>
                    </div>
                    <div className="input-box">
                        <label>
                            <span style={{display: "inline-block", width: "85px"}}>Longitude: </span>
                            <input 
                                className="input"
                                type="number" 
                                name="longitude" 
                                min="-180" 
                                max="180"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}/>
                        </label>
                    </div>
                    <div className="center">
                        <input type="submit" value="Submit"/>
                        {/* <Button type="submit" value="Submit" className="button" variant="outlined" onClick={handleSubmit}>Submit</Button> */}
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export {UserInput};