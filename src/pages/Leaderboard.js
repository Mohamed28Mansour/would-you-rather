import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import LeaderboardList from "../components/LeaderboardList";

const Leaderboard = () => {
  return (
    <>
      <NavBar />
      <LeaderboardList />
    </>
  );
};

export default connect()(Leaderboard);
