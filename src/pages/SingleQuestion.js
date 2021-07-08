import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import AnswerQuestion from "../components/AnswerQuestion";

const SingleQuestion = () => {
  return (
    <>
      <NavBar />
      <AnswerQuestion />
    </>
  );
};

export default connect()(SingleQuestion);
