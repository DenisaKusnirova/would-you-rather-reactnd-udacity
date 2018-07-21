import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from './Auth'
import Home from './Home'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import { getInitialUsers, getInitialQuestions } from '../actions/shared'
import QuestionPage from './QuestionPage'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  componentDidMount() {
    this.props.getInitialUsers()
    this.props.getInitialQuestions()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
            <Switch>
              <PrivateRoute path='/' exact component={Home} />
              <PrivateRoute path='/new' component={NewQuestion} />
              <PrivateRoute path='/leaderboard' component={Leaderboard} />
              <Route path='/auth' component={Auth} />
              <PrivateRoute path='/questions/:id' component={QuestionPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect(null, { getInitialUsers, getInitialQuestions })(App)