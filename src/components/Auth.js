import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { setAuthedUser } from '../actions/authedUser'

class Auth extends Component {
  state = {
    user: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onClick = () => {
    const user = this.props.users[this.state.user]

    if (user) {
      this.props.setAuthedUser(user)
      this.props.history.push('/')
    }
  }

  render() {
    const { users, userIds } = this.props
    return (
      <div className="auth-card">
        <Card>
          <div className="auth-card-header">
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div className="auth-card-icon">
            <img src={require('../react-redux-logo.jpg')} alt="react-redux-icon" />
          </div>
          <div className="auth-card-select">
            <form>
              <FormControl>
                <Select
                  value={this.state.user}
                  onChange={this.handleChange}
                  name="user"
                  displayEmpty
                >
                  <MenuItem value="" disabled>User name</MenuItem>
                  {userIds.map((id) => {
                    const user = users[id]
                    return (
                      <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </form>
          </div>
          <div className="auth-footer">
            <button className="sign-in-button" onClick={this.onClick}>
              Sign in
            </button>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users)

  return {
    users,
    userIds
  }
}

export default connect(mapStateToProps, { setAuthedUser })(Auth)