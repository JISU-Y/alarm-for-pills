import { CREATE_PILL } from './types'

// pills
const initialState = {
  pills: [],
}

const pillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PILL:
      console.log(state)
      console.log(action.payload)
      return { ...state, pills: [...state.pills, action.payload] }
    default:
      return state
  }
}

export default pillsReducer
