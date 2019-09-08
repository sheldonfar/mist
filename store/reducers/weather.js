import {FETCH_WEATHER, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS} from "../actions/types/weather";

const INITIAL_STATE = {
    value: null,
    isLoading: false,
}

const weather = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, isLoading: true }
        case FETCH_WEATHER_SUCCESS:
            return { ...state, isLoading: false, value: action.value }
        case FETCH_WEATHER_FAILURE:
            return { ...state, error: action.error, isLoading: false }
        default:
            return state
    }
}

const getWeather = state => state.weather
export const getWeatherValue = state => getWeather(state).value

export default weather
