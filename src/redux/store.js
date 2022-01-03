import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './rootReducer'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
