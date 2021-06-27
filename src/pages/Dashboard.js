import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import QuestionsList from "../components/QuestionsList";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <QuestionsList />
    </div>
  );
};

export default connect()(Dashboard);
