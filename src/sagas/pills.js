import 'regenerator-runtime/runtime'

import { all, fork, put, call, takeEvery } from 'redux-saga/effects'
import {
  CREATE_PILL,
  CREATE_PILL_SUCCESS,
  CREATE_PILL_FAILURE,
  DELETE_PILL,
  UPDATE_PILL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../redux/pills/types'
import { db } from '../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'

function* createPill(action) {
  try {
    const data = yield call(addDoc, collection(db, 'pills'), action.payload)
    console.log(data)
    yield put({ type: CREATE_PILL_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: CREATE_PILL_FAILURE, payload: error.message })
  }
}

function* watchCreatePill() {
  yield takeEvery(CREATE_PILL, createPill)
}

export default function* pillSaga() {
  yield all([fork(watchCreatePill)])
}
