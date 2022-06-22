import axios from 'axios';

class WeatherService {
  FetchCoordinatesHandler(city) {
    return axios.get(`weather`, {
      params: {
        q: city,
        units: 'metric',
      },
    });
  }

  FetchWeatherCoordinatesHandler({lon, lat}) {
    return axios.get(`onecall`, {
      params: {
        lat: lat,
        lon: lon,
        units: 'metric',
      },
    });
  }
}

const weatherServiceInstance = new WeatherService();
export default weatherServiceInstance;
