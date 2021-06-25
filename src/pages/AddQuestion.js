import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import NewQuestion from "../components/NewQuestion";

const AddQuestion = ({ isNavigationAllowed }) => {
  if (!isNavigationAllowed) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <NavBar />
      <NewQuestion />
    </div>
  );
};

export default connect()(AddQuestion);
