import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import Results from "../components/Results";

const ResultPage = () => {
  return (
    <>
      <NavBar />
      <Results />
    </>
  );
};

export default connect()(ResultPage);
