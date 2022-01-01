import { CREATE_PILL, DELETE_PILL, UPDATE_PILL, OPEN_MODAL, CLOSE_MODAL } from './types'
// import { put } from 'redux-saga/effects'
// import { db } from '../../utils/firebase'
// import { collection, addDoc } from 'firebase/firestore'

export const openModal = (dataObj) => {
  return {
    type: OPEN_MODAL,
    payload: dataObj,
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

export const createPill = (dataObj) => {
  return {
    type: CREATE_PILL,
    payload: dataObj,
  }
}

export const updatePill = (dataObj) => {
  return {
    type: UPDATE_PILL,
    payload: dataObj,
  }
}

export const deletePill = (id) => {
  return {
    type: DELETE_PILL,
    payload: id,
  }
}

// // 제너레이터 함수를 saga라고 칭함
// function* createPillSaga(dataObj) {
//   try {
//     const docRef = yield addDoc(collection(db, 'pills'), dataObj)
//     console.log(docRef)
//     yield put(createPill(docRef)) // 특정 액션을 디스패칭

//   } catch (error) {
//     // or maybe put a error dispatch
//     console.log(error)
//   }
// }
