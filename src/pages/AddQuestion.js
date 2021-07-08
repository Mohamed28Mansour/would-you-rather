import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import NewQuestion from "../components/NewQuestion";

const AddQuestion = () => {
  return (
    <>
      <NavBar />
      <NewQuestion />
    </>
  );
};

export default connect()(AddQuestion);
