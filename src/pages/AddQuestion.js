import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import NewQuestion from "../components/NewQuestion";

const AddQuestion = () => {
  return (
    <div>
      <NavBar />
      <NewQuestion />
    </div>
  );
};

export default connect()(AddQuestion);
