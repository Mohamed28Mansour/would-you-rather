import React from "react";
import { connect } from "react-redux";

const UserCard = ({ name, avatar, createdQuestions, answered, score }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={name} className="big-avatar" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>Answered questions:</p>
        <span>{answered}</span>
        <p>Created questions:</p>
        <span>{createdQuestions}</span>
      </div>
      <div>
        <div>
          <h4>Score</h4>
        </div>
        <div>
          <h4>{score}</h4>
        </div>
      </div>
    </div>
  );
};

export default connect()(UserCard);
