import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({ allQuestions, authedUser, users }) => {
  const [displayUnansweredQuestions, setDisplayUnansweredQuestions] =
    useState(true);

  const answeredQuestions = allQuestions
    .filter((question) => {
      return (
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
      );
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredQuestions = allQuestions
    .filter((question) => {
      return (
        !question.optionOne.votes.includes(authedUser) &&
        !question.optionTwo.votes.includes(authedUser)
      );
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  const showUnanswered = () => {
    setDisplayUnansweredQuestions(true);
  };

  const showAnswered = () => {
    setDisplayUnansweredQuestions(false);
  };

  return (
    <div className="container">
      <div className="box">
        <div>
          <button className="selection-btn" onClick={showUnanswered}>
            Unanswered Questions
          </button>
          <button className="selection-btn" onClick={showAnswered}>
            Answered Questions
          </button>
        </div>
        <div>
          {!displayUnansweredQuestions &&
            answeredQuestions.map((question) => {
              return (
                <QuestionCard
                  key={question.id}
                  author={users[question.author]}
                  text={question.optionOne.text}
                  id={question.id}
                />
              );
            })}
          {displayUnansweredQuestions &&
            unansweredQuestions.map((question) => {
              return (
                <QuestionCard
                  key={question.id}
                  author={users[question.author]}
                  text={question.optionOne.text}
                  id={question.id}
                  displayUnansweredQuestions={displayUnansweredQuestions}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ questions, authedUser, users }) {
  return {
    allQuestions: Object.values(questions),
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionsList);
