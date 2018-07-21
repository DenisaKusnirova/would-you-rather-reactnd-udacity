import { SET_AUTHED_USER, LOGOUT_USER } from '../actions/authedUser'
import { ADD_NEW_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

const initialState = {
  loggedUser: {}
}

const authedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        authedUser: action.user
      }
    case LOGOUT_USER:
      return {
        authedUser: {}
      }
    case ADD_NEW_QUESTION:
      return {
        authedUser: {
          ...state.authedUser,
          questions: state.authedUser.questions.concat([action.question.id])
        }
      }
    case SAVE_QUESTION_ANSWER:
      return {
        authedUser: {
          ...state.authedUser,
          answers: {
            ...state.authedUser.answers,
            [action.id]: action.answer
          }
        }
      }
    default:
      return state
  }
}
export default authedUserReducer