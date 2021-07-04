import { combineReducers } from "redux"
import { filesListReducer } from "./filesReducer"

export default combineReducers({
    filesList: filesListReducer
})