import { RECEIVE_USERS } from '../actions/users'
import { ADD_NEW_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [
            ...state[action.author].questions,
            action.question.id
          ]
        }
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer
          }
        }
      }
    default:
      return state
  }
}

export default usersReducer