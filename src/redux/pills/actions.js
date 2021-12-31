import { CREATE_PILL } from './types'

export const createPill = (dataObj) => {
  return {
    type: CREATE_PILL,
    payload: dataObj,
  }
}
