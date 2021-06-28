import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Results = ({ questions, users }) => {
  const { question_id } = useParams();
  let author;
  let question;

  if (Object.keys(questions).includes(question_id)) {
    question = questions[question_id];
    author = users[questions[question_id].author];
  } else {
    return <Redirect to="/random" />;
  }

  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  const optionOneBar = {
    width: (question.optionOne.votes.length / totalVotes) * 100,
    background: "4183c4",
  };

  const optionTwoBar = {
    width: (question.optionTwo.votes.length / totalVotes) * 100,
    background: "4183c4",
  };

  return (
    <div>
      <div>
        <h3>Asked by {author.name}</h3>
      </div>
      <div>
        <img src={author.avatarURL} alt={author.name} className="big-avatar" />
      </div>
      <div>
        <h2>Results:</h2>
        <div
          className={
            question.optionOne.votes.includes(author.id) ? "answer" : "none"
          }
        >
          <h4>{question.optionOne.text}</h4>
          <div>
            <div style={{ ...optionOneBar }}>
              {((question.optionOne.votes.length / totalVotes) * 100).toFixed(
                2
              )}
            </div>
          </div>
          <p>
            {question.optionOne.votes.length} out of {totalVotes} votes
          </p>
        </div>
        <div
          className={
            question.optionTwo.votes.includes(author.id) ? "answer" : "none"
          }
        >
          <h4>{question.optionTwo.text}</h4>
          <div>
            <div style={{ ...optionTwoBar }}>
              {((question.optionTwo.votes.length / totalVotes) * 100).toFixed(
                2
              )}
            </div>
          </div>
          <p>
            {question.optionTwo.votes.length} out of {totalVotes} votes
          </p>
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

export default connect(mapStateToProps)(Results);
