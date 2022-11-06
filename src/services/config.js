import {
  API_KEY
} from "./credentials";

export const OPEN_WEATHER_URL = "http://api.openweathermap.org/data/2.5/air_pollution"

export const openWeatherUrl = (lat, lon) => OPEN_WEATHER_URL + "?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;