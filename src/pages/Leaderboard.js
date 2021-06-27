import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import LeaderboardList from "../components/LeaderboardList";

const Leaderboard = () => {
  return (
    <div>
      <NavBar />
      <LeaderboardList />
    </div>
  );
};

export default connect()(Leaderboard);
