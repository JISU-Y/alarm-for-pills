import { CREATE_PILL, DELETE_PILL } from './types'

export const createPill = (dataObj) => {
  return {
    type: CREATE_PILL,
    payload: dataObj,
  }
}

export const deletePill = (id) => {
  return {
    type: DELETE_PILL,
    payload: id,
  }
}
