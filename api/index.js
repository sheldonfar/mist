import axios from 'axios'

const API_KEY = '3d6f7cedbb4eac226508e45ba145064e'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/'

function request(path, data = {}) {
  const requestParameters = { ...data, params: {...data.params, appId: API_KEY } }

  return axios({ ...requestParameters, url: BASE_URL + path })
    .then((response = {}) => {
      const { data } = response
      return data
    })
}

export const fetchForecast = (city, country, count = 1) => request(
  'forecast',
  { params: { q: `${city},${country}`, cnt: count } },
)

export const fetchWeather = (city = 'London', country = 'uk', units) => request(
    'weather',
    { params: { q: `${city},${country}`, units } },
)
