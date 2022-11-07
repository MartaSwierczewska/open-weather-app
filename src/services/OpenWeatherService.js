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

// eslint-disable-next-line
export const airComponents = new Array(
  'Carbon monoxide (CO)', 
  'Nitrogen monoxide (NO)', 
  'Nitrogen dioxide (NO2)', 
  'Ozone (O3)', 
  'Sulphur dioxide (SO2)', 
  'Fine particles matter (PM2.5)',
  'Coarse particulate matter (PM10)',
  'Ammonia (NH3)'
);

const airComponentsMap = new Map([
    ['co', 'Carbon monoxide (CO)'],
    ['no', 'Nitrogen monoxide (NO)'],
    ['no2', 'Nitrogen dioxide (NO2)'],
    ['o3', 'Ozone (O3)'],
    ['so2', 'Sulphur dioxide (SO2)'],
    ['pm2_5', 'Fine particles matter (PM2.5)'],
    ['pm10', 'Coarse particulate matter (PM10)'],
    ['nh3', 'Ammonia (NH3)'],
  ]);

  const airComponentsUrlMap = new Map([
    ['Carbon monoxide (CO)', 'https://en.wikipedia.org/wiki/Carbon_monoxide'],
    ['Nitrogen monoxide (NO)', 'https://en.wikipedia.org/wiki/Nitric_oxide'],
    ['Nitrogen dioxide (NO2)', 'https://en.wikipedia.org/wiki/Nitrogen_dioxide'],
    ['Ozone (O3)', 'https://en.wikipedia.org/wiki/Ozone'],
    ['Sulphur dioxide (SO2)', 'https://en.wikipedia.org/wiki/Sulfur_dioxide'],
    ['Fine particles matter (PM2.5)', 'https://en.wikipedia.org/wiki/Particulates'],
    ['Coarse particulate matter (PM10)', 'https://en.wikipedia.org/wiki/Particulates#Size,_shape_and_solubility_matter'],
    ['Ammonia (NH3)', 'https://en.wikipedia.org/wiki/Ammonia'],
  ]);

