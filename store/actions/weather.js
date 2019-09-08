import {FETCH_WEATHER, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS} from "./types/weather";

export const fetchWeather = () => ({ type: FETCH_WEATHER })
export const fetchWeatherSuccess = () => ({ type: FETCH_WEATHER_SUCCESS })
export const fetchWeatherFailure = () => ({ type: FETCH_WEATHER_FAILURE })
