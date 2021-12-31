import { combineReducers } from 'redux'
import pillsReducer from './pills/reducer'

const rootReducer = combineReducers({
  pills: pillsReducer,
})

export default rootReducer
