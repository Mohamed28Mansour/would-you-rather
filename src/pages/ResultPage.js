import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import Results from "../components/Results";

const ResultPage = (isNavigationAllowed) => {
  if (!isNavigationAllowed) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <NavBar />
      <Results />
    </div>
  );
};

export default connect()(ResultPage);
