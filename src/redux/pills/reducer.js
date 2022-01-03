import {
  CREATE_PILL,
  CREATE_PILL_SUCCESS,
  CREATE_PILL_FAILURE,
  FETCH_PILLS,
  FETCH_PILLS_SUCCESS,
  FETCH_PILLS_FAILURE,
  DELETE_PILL,
  UPDATE_PILL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types'

// pills
const initialState = {
  pills: [],
  isModalOpen: false,
  loading: false,
  formData: null,
}

const pillsReducer = (state = initialState, action) => {
  switch (action.type) {
    // modal
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, formData: action.payload }
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false, formData: null }

    // create a pill
    case CREATE_PILL:
      return { ...state, loading: true }
    case CREATE_PILL_SUCCESS:
      console.log('create success')
      return { ...state, loading: false, pills: [...state.pills, action.payload] }
    case CREATE_PILL_FAILURE:
      console.log('create failed')
      return { ...state, loading: false }

    // fetch pills
    case FETCH_PILLS:
      return { ...state, loading: true }
    case FETCH_PILLS_SUCCESS:
      console.log('fetch success')
      console.log(action.payload)
      return { ...state, loading: false, pills: [...action.payload] }
    case FETCH_PILLS_FAILURE:
      console.log('fetch failed')
      return { ...state, loading: false }
    case UPDATE_PILL:
      return {
        ...state,
        pills: state.pills.map((item) =>
          item.name === action.payload.name ? action.payload : item,
        ),
      }
    case DELETE_PILL:
      // 나중에 name은 id로 해야함
      return { ...state, pills: state.pills.filter((el, index) => index !== action.payload) }
    default:
      return state
  }
}

export default pillsReducer
