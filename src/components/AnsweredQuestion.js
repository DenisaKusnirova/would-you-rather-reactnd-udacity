import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import classNames from 'classnames/bind'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

class AnsweredQuestion extends Component {
  render() {
    const { optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = this.props.author
    const { authedUser } = this.props

    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const votesSum = optionOneVotes + optionTwoVotes

    const percent = 100 / votesSum
    const optionOnePercent = Math.round(percent * optionOneVotes)
    const optionTwoPercent = Math.round(percent * optionTwoVotes)

    let classesOptionOne = classNames({
      'result-option-box-1': true,
      'border-green': optionOne.votes.includes(authedUser.id)
    })

    let classesOptionTwo = classNames({
      'result-option-box-2': true,
      'border-green': optionTwo.votes.includes(authedUser.id)
    })

    return (
      <div className="question-box">
        <Card>
          <h3>Results</h3>
          <div className="card-content">
            <div className="question-box-column-1">
              <p className="question-header">Asked by {name}</p>
              <img src={avatarURL} alt="Avatar" className="avatar" />
            </div>
            <div className="question-box-column-2">
              <div className={classesOptionOne}>
                <p>Would you rather {optionOne.text}?</p>
                <p>{optionOneVotes} out of {votesSum} votes</p>
                <Progress
                  percent={optionOnePercent}
                />
              </div>
              <div className={classesOptionTwo}>
                <p>Would you rather {optionTwo.text}?</p>
                <p>{optionTwoVotes} out of {votesSum} votes</p>
                <Progress
                  percent={optionTwoPercent}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, auth }, { id }) => {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author,
    authedUser: auth.authedUser
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)