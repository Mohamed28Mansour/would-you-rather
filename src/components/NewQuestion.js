import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

const NewQuestion = ({ dispatch }) => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [toDashboard, setToDashboard] = useState(false);

  const handleFirstOption = (e) => {
    setFirstOption(e.target.value);
  };

  const handleSecondOption = (e) => {
    setSecondOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(firstOption, secondOption));

    setFirstOption("");
    setSecondOption("");
    setToDashboard(true);
  };

  if (toDashboard === true) {
    <Redirect to="/dashboard" />;
  }

  return (
    <div className="home-container">
      <div className="sign-in-box">
        <div className="greeting">
          <h2>Create New Question</h2>
        </div>
        <div className="sign-in">
          <form onSubmit={handleSubmit}>
            <h3>Would you rather...</h3>
            <input
              type="text"
              value={firstOption}
              onChange={handleFirstOption}
            />
            <h4>OR...</h4>
            <input
              type="text"
              value={secondOption}
              onChange={handleSecondOption}
            />
            <button
              type="submit"
              className="btn"
              disabled={firstOption === "" || secondOption === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect()(NewQuestion);
