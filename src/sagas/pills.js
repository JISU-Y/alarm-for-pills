import 'regenerator-runtime/runtime'

import { all, fork, put, call, takeEvery } from 'redux-saga/effects'
import {
  CREATE_PILL,
  CREATE_PILL_SUCCESS,
  CREATE_PILL_FAILURE,
  FETCH_PILLS,
  FETCH_PILLS_SUCCESS,
  FETCH_PILLS_FAILURE,
  UPDATE_PILL,
  UPDATE_PILL_SUCCESS,
  UPDATE_PILL_FAILURE,
  DELETE_PILL,
  DELETE_PILL_SUCCESS,
  DELETE_PILL_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../redux/pills/types'
import { db } from '../utils/firebase'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function* createPill(action) {
  try {
    const data = yield call(addDoc, collection(db, 'pills'), action.payload)
    console.log(data)
    yield put({ type: CREATE_PILL_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: CREATE_PILL_FAILURE, payload: error.message })
  }
}

function* getPills() {
  try {
    const querySnapshot = yield call(getDocs, collection(db, 'pills'))

    const pillList = []
    querySnapshot.forEach((doc) => {
      pillList.push({ id: doc.id, ...doc.data() })
      console.log(`${doc.id} => ${doc.data()}`)
    })

    yield put({ type: FETCH_PILLS_SUCCESS, payload: pillList })
  } catch (error) {
    yield put({ type: FETCH_PILLS_FAILURE, payload: error.message })
  }
}

function* updatePill(action) {
  try {
    const docRef = yield call(doc, db, 'pills', action.payload.id)

    if (!docRef) {
      console.log('해당하는 약을 찾을 수 없습니다.')
      return
    }

    yield call(updateDoc, docRef, action.payload)

    console.log(action.payload)

    yield put({ type: UPDATE_PILL_SUCCESS, payload: action.payload })
  } catch (error) {
    yield put({ type: UPDATE_PILL_FAILURE, payload: error.message })
  }
}

function* deletePill(action) {
  try {
    const docRef = yield call(doc, db, 'pills', action.payload)

    if (!docRef) {
      console.log('해당하는 약을 찾을 수 없습니다.')
      return
    }

    yield call(deleteDoc, docRef)

    console.log(action.payload)

    yield put({ type: DELETE_PILL_SUCCESS, payload: action.payload })
  } catch (error) {
    yield put({ type: DELETE_PILL_FAILURE, payload: error.message })
  }
}

function* watchPill() {
  yield takeEvery(CREATE_PILL, createPill)
  yield takeEvery(FETCH_PILLS, getPills)
  yield takeEvery(UPDATE_PILL, updatePill)
  yield takeEvery(DELETE_PILL, deletePill)
}

export default function* pillSaga() {
  yield all([fork(watchPill)])
}
