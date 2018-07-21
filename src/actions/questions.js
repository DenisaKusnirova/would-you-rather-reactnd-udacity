import {  _saveQuestion, _saveQuestionAnswer } from '../data'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

// ADD QUESTION
export const addNewQuestion = (question, author) => {
    return {
        type: ADD_NEW_QUESTION,
        question,
        author
    }
}

export const handleAddNewQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { auth } = getState()

        return _saveQuestion({ 
            optionOneText, 
            optionTwoText, 
            author: auth.authedUser.id
        })
        .then((question) => dispatch(addNewQuestion(question, auth.authedUser.id)))
    }
}

// SAVE ANSWER
export const saveQuestionAnswer = ( id, answer, authedUser) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        id,
        answer,
        authedUser
    }
}

export const handleSaveQuestionAnswer = (id, answer) => {
    return(dispatch, getState) => {
        const  { auth } = getState()

        return _saveQuestionAnswer({
            authedUser: auth.authedUser.id,
            qid: id,
            answer
        })
        .then(() => dispatch(saveQuestionAnswer(id, answer, auth.authedUser.id)))
    }
}
