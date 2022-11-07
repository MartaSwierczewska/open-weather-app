import {
    openWeatherUrl
} from "./config";

export const fetchOpenWeatherData = (latitude, longitude) => fetch(openWeatherUrl(latitude, longitude)).then(response => response.json())

export const extractComponents = (result) => {
    let airPollutionComponents = result['list'][0]['components']
    return Object.keys(airPollutionComponents).map((key) => [airComponentsMap.get(key), airPollutionComponents[key]]);
}

export const getAirComponentUrl = (component) => {
  return airComponentsUrlMap.get(component);
}

export const transformAirQualityIndex = (index) => {
    switch(index) {
        case 1:
          return "GOOD";
        case 2:
          return "FAIR";
        case 3:
          return "MODERATE";
        case 4:
          return "POOR";
        case 5:
          return "VERY POOR";
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

  const airComponentsUrlMap = new Map([
    ['Carbon monoxide', 'https://en.wikipedia.org/wiki/Carbon_monoxide'],
    ['Nitrogen monoxide', 'https://en.wikipedia.org/wiki/Nitric_oxide'],
    ['Nitrogen dioxide', 'https://en.wikipedia.org/wiki/Nitrogen_dioxide'],
    ['Ozone', 'https://en.wikipedia.org/wiki/Ozone'],
    ['Sulphur dioxide', 'https://en.wikipedia.org/wiki/Sulfur_dioxide'],
    ['Fine particles matter', 'https://en.wikipedia.org/wiki/Particulates'],
    ['Coarse particulate matter', 'https://en.wikipedia.org/wiki/Particulates#Size,_shape_and_solubility_matter'],
    ['Ammonia', 'https://en.wikipedia.org/wiki/Ammonia'],
  ]);

