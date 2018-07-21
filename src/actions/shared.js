import { _getUsers } from '../data'
import { _getQuestions } from '../data'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export const getInitialUsers = () => {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export const getInitialQuestions = () => {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}



