import {
    openWeatherUrl
} from "./config";

export const fetchOpenWeatherData = (latitude, longitude) => fetch(openWeatherUrl(latitude, longitude)).then(response => response.json())

export const extractComponents = (result) => {
    let airPollutionComponents = result['list'][0]['components']
    return Object.keys(airPollutionComponents).map((key) => [airComponentsMap.get(key), airPollutionComponents[key]]);
}

// TODO add more description
export const transformAirQualityIndex = (index) => {
    switch(index) {
        case 1:
          return "Good";
        case 2:
          return "Fair";
        case 3:
          return "Moderate";
        case 4:
          return "Poor";
        case 5:
          return "Very Poor";
        default:
          return "Something went wrong. Please try again."
      }
}

export const getAirQualityIndexStyle = (index) => {
  switch(index) {
    case 1:
      return "good";
    case 2:
      return "fair";
    case 3:
      return "moderate";
    case 4:
      return "poor";
    case 5:
      return "very-poor";
    default:
      return "";
  }
}

export const airComponents = new Array(
  'Carbon monoxide', 
  'Nitrogen monoxide', 
  'Nitrogen dioxide', 
  'Ozone', 
  'Sulphur dioxide', 
  'Fine particles matter',
  'Coarse particulate matter',
  'Ammonia'
);

const airComponentsMap = new Map([
    ['co', 'Carbon monoxide'],
    ['no', 'Nitrogen monoxide'],
    ['no2', 'Nitrogen dioxide'],
    ['o3', 'Ozone'],
    ['so2', 'Sulphur dioxide'],
    ['pm2_5', 'Fine particles matter'],
    ['pm10', 'Coarse particulate matter'],
    ['nh3', 'Ammonia'],
  ]);

