import {GET_WEATHER, SET_ERROR} from './types';
import {openweathermap_api_key} from '../../config.json';

interface Props {
  city: string;
  onSuccess: () => void;
  onError: () => void;
}

const getWeather = (props: Props) => {
  const {city, onSuccess, onError} = props;
  return async dispatch => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`,
      );

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      console.log(resData);

      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = err => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};

export default getWeather;
