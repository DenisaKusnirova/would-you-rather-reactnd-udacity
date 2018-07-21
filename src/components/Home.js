import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import QuestionPreview from './QuestionPreview'

class Home extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { questionsIds, authedUser } = this.props

    const answersIds = Object.keys(authedUser.answers)
    let answeredQuestionsIds = questionsIds.filter((questionId) => answersIds.includes(questionId))
    let unAnsweredQuestionsIds = questionsIds.filter((questionId) => !answersIds.includes(questionId)) 

    return (
      <div>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={this.handleChange}
        >
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>
        {this.state.value === 0 && unAnsweredQuestionsIds.map((id) => (
          <div className="question-box" key={id}>
            <QuestionPreview id={id} />
          </div>
        ))}
        {this.state.value === 1 && answeredQuestionsIds.map((id) => (
          <div className="question-box" key={id}>
            <QuestionPreview id={id} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions, auth }) => ({
  questions,
  questionsIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  authedUser: auth.authedUser
})

export default connect(mapStateToProps)(Home)