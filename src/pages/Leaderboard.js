import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";

const Leaderboard = ({ isNavigationAllowed }) => {
  if (!isNavigationAllowed) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default connect()(Leaderboard);
