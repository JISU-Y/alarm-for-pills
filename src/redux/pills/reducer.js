import { CREATE_PILL, DELETE_PILL } from './types'

// pills
const initialState = {
  pills: [],
}

const pillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PILL:
      return { ...state, pills: [...state.pills, action.payload] }
    case DELETE_PILL:
      return { ...state, pills: state.pills.filter((el) => el.name !== action.payload) }
    default:
      return state
  }
}

export default pillsReducer
