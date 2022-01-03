import {
  CREATE_PILL,
  FETCH_PILLS,
  DELETE_PILL,
  UPDATE_PILL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types'

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

export const fetchPills = () => {
  return { type: FETCH_PILLS }
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
