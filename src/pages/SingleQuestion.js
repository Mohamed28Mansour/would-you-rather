import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import AnswerQuestion from "../components/AnswerQuestion";

const SingleQuestion = () => {
  return (
    <div>
      <NavBar />
      <AnswerQuestion />
    </div>
  );
};

export default connect()(SingleQuestion);
