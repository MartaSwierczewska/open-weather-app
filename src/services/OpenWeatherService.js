import {
    openWeatherUrl
} from "./config";

export const fetchOpenWeatherData = (latitude, longitude) => fetch(openWeatherUrl(latitude, longitude)).then(response => response.json())
