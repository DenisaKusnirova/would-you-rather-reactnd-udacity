import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
  authedUser,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      authedUser && authedUser.id ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/auth" />
        )
    )} />
  )

const mapStateToProps = ({ auth }) => ({
  authedUser: auth.authedUser
})

export default connect(mapStateToProps)(PrivateRoute)