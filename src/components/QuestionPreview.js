import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'

class QuestionPreview extends Component {
  render() {
    const { id, optionOne } = this.props.question
    const { name, avatarURL } = this.props.author

    return (
      <Card>
        <div className="card-content">
          <div className="question-box-column-1">
            <p className="question-header">{name} asks:</p>
            <img src={avatarURL} alt="Avatar" className="avatar" />
          </div>
          <div className="question-box-column-2">
            <p className="question-header">Would you rather</p>
            <p>{optionOne.text} or ...</p>
            <button className="preview-button">
              <Link to={`/questions/${id}`} className="link">
                View Poll
              </Link>
            </button>
          </div>
        </div>
      </Card>
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

export default withRouter(connect(mapStateToProps)(QuestionPreview))