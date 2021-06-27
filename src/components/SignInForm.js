import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { handleAuthedUser } from "../actions/authedUser";

const SignInForm = ({ allUsers, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [redirectToPage, setRedirectToPage] = useState(false);

  const { state } = useLocation();

  const handleSubmit = () => {
    dispatch(handleAuthedUser(selectedUser));
    setSelectedUser("");
    setRedirectToPage(true);
  };

  if (redirectToPage) {
    return <Redirect to={state?.from || "/dashboard"} />;
  }

  let dropDownUsers = allUsers.map((user) => {
    return {
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    };
  });
  return (
    <div className="home-container">
      <div className="sign-in-box">
        <div className="greeting">
          <h2>Welcome to the Would You Rather App!</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className="sign-in">
          <img
            src="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="hello"
          />
          <h3>Sign In</h3>

          <Dropdown
            onChange={(e, { value }) => setSelectedUser(value)}
            style={{ width: "70%", margin: "3% 0" }}
            placeholder="Select a profile"
            fluid
            selection
            options={dropDownUsers}
            value={selectedUser}
          />
          <button
            className="btn"
            onClick={() => handleSubmit()}
            disabled={selectedUser === ""}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    allUsers: Object.values(users),
  };
}

export default connect(mapStateToProps)(SignInForm);
