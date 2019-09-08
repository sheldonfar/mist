import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

const persistedState = {} //LS.loadState()

export default function () {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(rootSaga)
  return store
}
