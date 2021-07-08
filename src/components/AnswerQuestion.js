import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

const AnswerQuestion = ({ questions, users, dispatch }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [toResults, setToResults] = useState(false);

  const { question_id } = useParams();

  let question;

  let author;

  if (Object.keys(questions).includes(question_id)) {
    question = questions[question_id];
    author = users[questions[question_id].author];
  } else {
    return <Redirect to="/random" />;
  }

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
    <div className="container">
      {question && author && (
        <div className="box">
          <div className="answer-form-card">
            <div className="author">
              <h3>{author.name} asks:</h3>
              <img
                src={author.avatarURL}
                alt={author.name}
                className="big-avatar"
              />
            </div>
            <div className="answer-form">
              <h3>Would you rather...</h3>

              <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                  <input
                    name="option"
                    type="radio"
                    value="optionOne"
                    onChange={(e) => optionSelector(e.target.value)}
                  />
                  <span>{question.optionOne.text}</span>
                </label>
                <label>
                  <input
                    name="option"
                    type="radio"
                    value="optionTwo"
                    onChange={(e) => optionSelector(e.target.value)}
                  />
                  <span>{question.optionTwo.text}</span>
                </label>
                <button className="small-btn" type="submit">
                  Submit Answer
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
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
