import React from 'react';
import {UserInput} from "../../components/UserInput/UserInput";
import {WeatherInfo} from "../../components/WeatherInfo/WeatherInfo";
import {Footer} from "../../components/Footer/Footer";
import {useState} from "react";
import "./Home.css"

function Home() {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const setUserInput = (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
    }

    return (
        <div className="app">
            <div>
                <h2 style={{textAlign: "center"}}>Welcome! Here you can check the quality of the air in specified location.</h2>
                <h3 style={{textAlign: "center"}}>To start, enter latitude and longitude. This website can help you: <a style={{textDecoration: "none"}} href={"https://www.latlong.net/"}>
                    <span style={{color: "orange", fontSize: "18px"}}>https://www.latlong.net/</span></a></h3>
                <UserInput setUserInput={setUserInput}/>
                <WeatherInfo latitude={latitude} longitude={longitude}/>
            </div>
            <Footer/>
        </div>
    );
}

export { Home };