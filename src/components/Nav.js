import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authedUser'

class Nav extends Component {
  onLogoutButtonClick = () => {
    this.props.logoutUser()
  }

  render() {
    const { authedUser } = this.props

    return (
      <nav className="navbar">
        <div>
          <span className="navbar-element" id="header">Would You Rather?</span>
        </div>
        <div className="nav-elements">
          <NavLink to='/' exact className="navbar-element">
            Home
          </NavLink>
          <NavLink to='/new' className="navbar-element">
            New Question
          </NavLink>
          <NavLink to='/leaderboard' className="navbar-element">
            Leaderboard
          </NavLink>
          <span className="navbar-element">{!!authedUser && authedUser.name && 'Hello ' + authedUser.name}</span>
          <NavLink to='/auth' className="navbar-element">
            <button className="logout-button" onClick={this.onLogoutButtonClick}>Logout</button>
          </NavLink>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  authedUser: auth.authedUser
})

export default connect(mapStateToProps, { logoutUser })(Nav)