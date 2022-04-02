import { combineReducers } from 'redux'
import {reducer} from "./reducer"
import {Profilereducer} from "./Profilereducer"
 const rootReducer = combineReducers({
 reducer,
 Profilereducer


})
export default rootReducer;