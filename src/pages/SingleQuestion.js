import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnswerQuestion from "../components/AnswerQuestion";

const SingleQuestion = ({ isNavigationAllowed }) => {
  if (!isNavigationAllowed) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <NavBar />
      <AnswerQuestion />
    </div>
  );
};

export default connect()(SingleQuestion);
