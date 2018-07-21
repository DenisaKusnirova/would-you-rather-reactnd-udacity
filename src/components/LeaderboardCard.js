import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'

class LeaderboardCard extends Component {
  render() {
    const { name, avatarURL, answers, questions } = this.props.user
    const questionsCount = questions.length
    const answersCount = Object.keys(answers).length
    const score = questionsCount + answersCount

    return (
      <Card>
        <div className="card-content">
          <div className="leaderboard-box-column-1">
            <p>{name}</p>
            <img src={avatarURL} alt="Avatar" className="avatar" />
          </div>
          <div className="leaderboard-box-column-2">
            <p>Answered questions: {answersCount}</p>
            <p>Created questions: {questionsCount}</p>
          </div>
          <div className="leaderboard-box-column-3">
            <p className="score">SCORE: {score}</p>
          </div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id]

  return {
    user
  }
}

export default connect(mapStateToProps)(LeaderboardCard)

