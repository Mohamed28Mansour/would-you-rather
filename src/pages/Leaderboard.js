import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import LeaderboardList from "../components/LeaderboardList";

const Leaderboard = ({ isNavigationAllowed }) => {
  if (!isNavigationAllowed) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <NavBar />
      <LeaderboardList />
    </div>
  );
};

export default connect()(Leaderboard);
