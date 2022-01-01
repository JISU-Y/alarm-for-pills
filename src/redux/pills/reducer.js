import { CREATE_PILL, DELETE_PILL, UPDATE_PILL, OPEN_MODAL, CLOSE_MODAL } from './types'

// pills
const initialState = {
  pills: [],
  isModalOpen: false,
  formData: {
    type: '약',
    name: '',
    freq: '하루에 n번',
    freqDetail: '',
    many: 0,
    time: '',
    left: 0,
  },
}

const pillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, formData: action.payload }
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false, formData: null }
    case CREATE_PILL:
      return { ...state, pills: [...state.pills, action.payload] }
    case UPDATE_PILL:
      return { ...state, pills: [...state.pills, action.payload] }
    case DELETE_PILL:
      // 나중에 name은 id로 해야함
      return { ...state, pills: state.pills.filter((el) => el.name !== action.payload) }
    default:
      return state
  }
}

export default pillsReducer
