import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { handleLogOutAuthedUser } from "../actions/authedUser";

const NavBar = ({ user, dispatch }) => {
  const [toHome, setToHome] = useState(false);

  const handleLogOut = () => {
    setToHome(true);
    dispatch(handleLogOutAuthedUser(""));
  };

  if (toHome) {
    return <Redirect to="/" />;
  }

  if (user.length > 0) {
    return (
      <div className="nav-container">
        <div className="nav-tabs">
          <ul>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/add">
              <li>New Question</li>
            </Link>
            <Link to="/leaderboard">
              <li>Leader Board</li>
            </Link>
          </ul>
        </div>
        <div className="nav-user">
          <img src={user[0].avatarURL} alt="" className="avatar" />
          Hello {user[0].name}
        </div>
        <div className="logout">
          <button onClick={() => handleLogOut()}>Logout</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

function mapStateToProps({ users, authedUser }) {
  return {
    user: Object.values(users).filter(
      (singleUser) => singleUser.id === authedUser
    ),
  };
}

export default connect(mapStateToProps)(NavBar);
