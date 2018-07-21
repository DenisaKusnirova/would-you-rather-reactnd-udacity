import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddNewQuestion } from '../actions/questions'
import Card from '@material-ui/core/Card'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  onOptionOneChange = (e) => {
    const optionOneText = e.target.value
    this.setState(() => ({ optionOneText }))
  }

  onOptionTwoChange = (e) => {
    const optionTwoText = e.target.value
    this.setState(() => ({ optionTwoText }))
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    this.props.handleAddNewQuestion(optionOneText, optionTwoText)
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="question-box">
        <Card>
          <h3>Create New Question</h3>
          <div className="new-question-subheading">
            <p>Complete the question:</p>
            <p><b>Whould you rather ...</b></p>
          </div>
          <div>
            <form className="new-question-form" onSubmit={this.onFormSubmit}>
              <input
                placeholder="Enter option ONE text here"
                value={this.state.optionOneText}
                onChange={this.onOptionOneChange}
                className="input-new-question"
              />
              <p>or</p>
              <input
                placeholder="Enter option TWO text here"
                value={this.state.optionTwoText}
                onChange={this.onOptionTwoChange}
                className="input-new-question"
              />
              <button
                type="submit"
                className="btn-with-padding"
                disabled={this.state.optionTwoText === '' || this.state.optionTwoText === ''}
              >
                Submit
              </button>
            </form>
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(null, { handleAddNewQuestion })(NewQuestion)