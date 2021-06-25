import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import QuestionsList from "../components/QuestionsList";

const Dashboard = ({ isNavigationAllowed }) => {
  if (!isNavigationAllowed) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <NavBar />
      <QuestionsList />
    </div>
  );
};

export default connect()(Dashboard);
