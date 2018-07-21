import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPoll from './QuestionPoll'
import AnsweredQuestion from './AnsweredQuestion'

class QuestionPage extends Component {
  render() {
    const { id, authedUser } = this.props

    return (
      <div>
        {(id in authedUser.answers) ? <AnsweredQuestion id={id} /> : <QuestionPoll id={id} />}
      </div>
    )
  }
}

const mapStateToProps = ({ questions, auth }, props) => {
  const { id } = props.match.params
  
  return {
    id,
    questions,
    authedUser: auth.authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)