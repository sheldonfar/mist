import { FETCH_WEATHER, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS } from '../actions/types/weather'

const INITIAL_STATE = {
  isLoading: false,
  temperature: null,
  description: null,
}

const weather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, isLoading: true }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        temperature: action.weather.main.temp,
        description: action.weather.weather[0].description,
      }
    case FETCH_WEATHER_FAILURE:
      return { ...state, error: action.error, isLoading: false }
    default:
      return state
  }
}

const getWeather = state => state.weather
export const getWeatherTemperature = state => getWeather(state).temperature
export const getWeatherDescription = state => getWeather(state).description

export default weather
