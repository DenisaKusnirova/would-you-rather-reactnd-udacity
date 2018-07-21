import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import { handleSaveQuestionAnswer } from '../actions/questions'

class QuestionPoll extends Component {
  state = {
    selectedOption: 'optionOne'
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { id } = this.props.question
    const { selectedOption } = this.state
    const answer = selectedOption

    this.props.handleSaveQuestionAnswer(id, answer)
  }

  render() {
    const { optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = this.props.author

    return (
      <div className="question-box">
        <Card>
          <div className="card-content">
            <div className="question-box-column-1">
              <p>{name} asks:</p>
              <img src={avatarURL} alt="Avatar" className="avatar" />
            </div>
            <div className="question-box-column-2">
              <p className="question-header">Would you rather ...</p>
              <form className="submit-answer-form" onSubmit={this.onSubmit}>
                <div>
                  <input
                    type="radio"
                    id="optionOne"
                    value="optionOne"
                    checked={this.state.selectedOption === 'optionOne'}
                    onChange={this.handleOptionChange}
                  />
                  <label>{optionOne.text}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="optionTwo"
                    value="optionTwo"
                    checked={this.state.selectedOption === 'optionTwo'}
                    onChange={this.handleOptionChange}
                  />
                  <label>{optionTwo.text}</label>
                </div>
                <button className="btn-with-padding">Submit Answer</button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author
  }
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(QuestionPoll)