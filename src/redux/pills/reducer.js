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
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types'

// pills
const initialState = {
  pills: [],
  isModalOpen: false,
  loading: false,
  formData: null,
  weeklyPills: [],
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
      return { ...state, loading: false, pills: [...action.payload] }
    case FETCH_PILLS_FAILURE:
      console.log('fetch failed')
      return { ...state, loading: false }

    // update a pill
    case UPDATE_PILL:
      return { ...state, loading: true }
    case UPDATE_PILL_SUCCESS:
      console.log('update success')
      return {
        ...state,
        loading: false,
        pills: state.pills.map((item) => (item.id === action.payload.id ? action.payload : item)),
      }
    case UPDATE_PILL_FAILURE:
      console.log('update failed')
      return { ...state, loading: false }

    // delete a pill
    case DELETE_PILL:
      return { ...state, loading: true }
    case DELETE_PILL_SUCCESS:
      console.log('delete success')
      return {
        ...state,
        loading: false,
        pills: state.pills.filter((el) => el.id !== action.payload),
      }
    case DELETE_PILL_FAILURE:
      console.log('delete failed')
      return { ...state, loading: false }

    // fetch pills today
    case WEEK_PILL:
      return { ...state, loading: true }
    case WEEK_PILL_SUCCESS:
      console.log('search success')
      console.log(action.payload)
      return { ...state, loading: false, weeklyPills: [...action.payload] }
    case WEEK_PILL_FAILURE:
      console.log('search failed')
      return { ...state, loading: false }

    default:
      return state
  }
}

export default pillsReducer
