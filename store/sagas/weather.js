import { call, put, takeLeading, all, select } from 'redux-saga/effects'
import * as API from '../../api'
import {fetchWeatherFailure, fetchWeatherSuccess} from "../actions/weather";
import {FETCH_WEATHER} from "../actions/types/weather";
import {getDegreeUnits} from "../reducers/settings";

function* fetchWeather({ city, country }) {
    try {
        const units = yield select(getDegreeUnits)
        const resp = yield call(API.fetchWeather, city, country, units.apiName)
        console.info("REEEEE", resp)
        yield put(fetchWeatherSuccess(resp))
    } catch (error) {
        yield put(fetchWeatherFailure(error))
    }
}

function* watchFetchWeather() {
    yield takeLeading(FETCH_WEATHER, fetchWeather)
}

export default function* () {
    yield all([
        watchFetchWeather(),
    ])
}
