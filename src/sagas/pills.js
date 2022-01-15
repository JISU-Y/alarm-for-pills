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
  WEEK_PILL,
  WEEK_PILL_SUCCESS,
  WEEK_PILL_FAILURE,
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
  getDoc,
} from 'firebase/firestore'

function* createPill(action) {
  try {
    const docRef = yield call(addDoc, collection(db, 'pills'), {
      ...action.payload,
      created: Timestamp.fromDate(new Date()), // Timestamp.fromDate(new Date()) FieldValue.serverTimestamp()
    })

    const docData = yield call(getDoc, docRef)

    yield put({
      type: CREATE_PILL_SUCCESS,
      payload: { id: docRef.id, created: docData.data().created, ...action.payload },
    })
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

function* getPillsWeek() {
  try {
    const dayOfWeek = {
      월: 1,
      화: 2,
      수: 3,
      목: 4,
      금: 5,
      토: 6,
      일: 7,
    }

    const collRef = collection(db, 'pills')

    // get all pills
    const querySnapshot = yield call(getDocs, collRef)
    const pills = []
    querySnapshot.forEach((doc) => {
      pills.push({ id: doc.id, ...doc.data() })
    })

    // get pills for eact day
    const queries = yield all(
      Object.keys(dayOfWeek).map((day) =>
        call(query, collRef, where('freqWeekdays', 'array-contains-any', [day])),
      ),
    )
    const querySnapshots = yield all(queries.map((q) => call(getDocs, q)))
    let pillsEachday = querySnapshots.map((querySnapshot) =>
      querySnapshot.docs.map((doc) => doc.data()),
    )

    const filteredPills = pills.filter((pill) => pill.freqDay !== 0)
    filteredPills.forEach((pill, index) => {
      if (pill.freqDay === '1' || pill.freqDay === 1) {
        pillsEachday = pillsEachday.map((eachDay) => [...eachDay, pill])
      } else {
        // 생성 날짜로부터 오늘날짜 기준 월~일에 어느 때 먹어야 하는지 계산
        const today = new Date()
        const pillDayArr = pill.created?.toDate().toLocaleDateString('ko-KO').split('. ')

        const [year, month, day] = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
        const dayOffset = today.getDay() === 0 ? 6 : today.getDay() - 1 // 일요일 6로 바꿈

        const thenDate = new Date(...pillDayArr)
        const monDate = new Date(year, month, day - dayOffset) // 그 주의 월요일만 구함

        const btMs = monDate.getTime() - thenDate.getTime()
        const btDay = btMs / (1000 * 60 * 60 * 24)

        if ((btDay + index) % Number(pill.freqDay) === 0) {
          pillsEachday[index] = [...pillsEachday[index], pill]
        }
      }
    })

    yield put({ type: WEEK_PILL_SUCCESS, payload: pillsEachday })
  } catch (error) {
    console.log(error)
    yield put({ type: WEEK_PILL_FAILURE, payload: error.message })
  }
}

function* watchPill() {
  yield takeEvery(CREATE_PILL, createPill)
  yield takeEvery(FETCH_PILLS, getPills)
  yield takeEvery(UPDATE_PILL, updatePill)
  yield takeEvery(DELETE_PILL, deletePill)
  yield takeEvery(WEEK_PILL, getPillsWeek)
}

export default function* pillSaga() {
  yield all([fork(watchPill)])
}
