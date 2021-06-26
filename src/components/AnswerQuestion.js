import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

const AnswerQuestion = ({ questions, users, dispatch }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [toResults, setToResults] = useState(false);

  const { question_id } = useParams();

  const author = users[questions[question_id].author];

  const question = questions[question_id];

  const displayAnswers = () => {
    setToResults(true);
  };

  if (toResults) {
    return <Redirect to={`/result/${question_id}`} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question_id, selectedOption));
    displayAnswers();
  };

  const optionSelector = (value) => {
    setSelectedOption(value);
  };
  return (
    <div>
      <div>
        <div>
          <h3>{author.name} asks:</h3>
        </div>
        <div>
          <div>
            <img
              src={author.avatarURL}
              alt={author.name}
              className="big-avatar"
            />
          </div>
          <div>
            <h3>Would you rather...</h3>

            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <input
                  name="option"
                  type="radio"
                  value="optionOne"
                  onChange={(e) => optionSelector(e.target.value)}
                />
                <p>{question.optionOne.text}</p>
              </label>
              <label>
                <input
                  name="option"
                  type="radio"
                  value="optionTwo"
                  onChange={(e) => optionSelector(e.target.value)}
                />
                <p>{question.optionTwo.text}</p>
              </label>
              <button type="submit">Submit Answer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(AnswerQuestion);
