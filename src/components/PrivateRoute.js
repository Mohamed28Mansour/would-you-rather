import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authedUser !== "" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
