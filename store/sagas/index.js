import { all } from 'redux-saga/effects'
import weather from './weather'

export default function* () {
  yield all([
    weather(),
  ])
}
