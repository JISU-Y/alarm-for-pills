import { all, fork } from 'redux-saga/effects'
import pills from './pills'

export default function* rootSaga() {
  yield all([fork(pills)])
}
