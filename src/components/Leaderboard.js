import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {
  render() {
    const { usersIds } = this.props

    return (
      <div>
        {usersIds.map((id) => (
          <div className="question-box" key={id}>
            <LeaderboardCard id={id} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ users }, { id }) => ({
  usersIds: Object.keys(users).sort((a, b) =>
    (users[b].questions.length + Object.keys(users[b].answers).length)
      - (users[a].questions.length + Object.keys(users[a].answers).length))
})

export default connect(mapStateToProps)(Leaderboard)