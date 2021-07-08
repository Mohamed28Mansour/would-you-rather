import React from "react";
import { connect } from "react-redux";

const UserCard = ({ name, avatar, createdQuestions, answered, score }) => {
  return (
    <div className="card">
      <div className="leader-display">
        <img src={avatar} alt={name} className="big-avatar" />
        <div>
          <h2>{name}</h2>
          <ul>
            <li>
              Answered questions: <span>{answered}</span>
            </li>
            <li>
              Created questions: <span>{createdQuestions}</span>
            </li>
          </ul>
        </div>
        <div className="score">
          <h3>Score</h3>
          <h4>{score}</h4>
        </div>
      </div>
    </div>
  );
};

export default connect()(UserCard);
