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
  TODAY_PILL,
  TODAY_PILL_SUCCESS,
  TODAY_PILL_FAILURE,
} from '../redux/pills/types'
import { db } from '../utils/firebase'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  Timestamp,
} from 'firebase/firestore'

function* createPill(action) {
  try {
    const docRef = yield call(addDoc, collection(db, 'pills'), {
      ...action.payload,
      created: Timestamp.fromDate(new Date()), // Timestamp.fromDate(new Date()) FieldValue.serverTimestamp()
    })

    yield put({ type: CREATE_PILL_SUCCESS, payload: { id: docRef.id, ...action.payload } })
  } catch (error) {
    console.log(error)
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

function* getPillsToday() {
  try {
    const collRef = collection(db, 'pills')

    // 요일 하나만 가져오기
    // const q = yield call(
    //   query,
    //   collRef,
    //   where('freqWeekdays', 'array-contains-any', action.payload),
    // )

    // const querySnapshots = yield call(getDocs, q)

    // const docData = []

    // const docData = querySnapshots.map((doc) => doc.data())

    const dayOfWeek = {
      월: 1,
      화: 2,
      수: 3,
      목: 4,
      금: 5,
      토: 6,
      일: 7,
    }

    const queries = yield all(
      Object.keys(dayOfWeek).map((day) =>
        call(query, collRef, where('freqWeekdays', 'array-contains-any', [day])),
      ),
    )
    const querySnapshots = yield all(queries.map((q) => call(getDocs, q)))

    const docData = querySnapshots.map((querySnapshot) =>
      querySnapshot.docs.map((doc) => doc.data()),
    )

    yield put({ type: TODAY_PILL_SUCCESS, payload: docData })
  } catch (error) {
    console.log(error)
    yield put({ type: TODAY_PILL_FAILURE, payload: error.message })
  }
}

function* watchPill() {
  yield takeEvery(CREATE_PILL, createPill)
  yield takeEvery(FETCH_PILLS, getPills)
  yield takeEvery(UPDATE_PILL, updatePill)
  yield takeEvery(DELETE_PILL, deletePill)
  yield takeEvery(TODAY_PILL, getPillsToday)
}

export default function* pillSaga() {
  yield all([fork(watchPill)])
}
