import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import questionsReducer from './questionsReducer'
import authedUserReducer from './authedUserReducer'

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    auth: authedUserReducer
})
