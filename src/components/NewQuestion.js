import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

const NewQuestion = ({ dispatch }) => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard) {
    return <Redirect to="/dashboard" />;
  }

  const handleFirstOption = (e) => {
    setFirstOption(e.target.value);
  };

  const handleSecondOption = (e) => {
    setSecondOption(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(handleAddQuestion(firstOption, secondOption));

    setToDashboard(true);
    setFirstOption("");
    setSecondOption("");
  };

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
              placeholder="first option"
              type="text"
              value={firstOption}
              onChange={handleFirstOption}
            />
            <h4>OR...</h4>
            <input
              placeholder="second option"
              type="text"
              value={secondOption}
              onChange={handleSecondOption}
            />
            <button
              type="button"
              className="btn"
              disabled={firstOption === "" || secondOption === ""}
              onClick={() => handleSubmit()}
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
