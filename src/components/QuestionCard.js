import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const QuestionCard = ({ author, text, id }) => {
  const [toQuestion, setToQuestion] = useState(false);

  const clickHandler = () => {
    setToQuestion(true);
  };

  if (toQuestion) {
    return <Redirect to={`/question/${id}`} />;
  }
  console.log(author.name);
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
            <h4>Would you rather</h4>
            <p>{text}</p>
            <button onClick={() => clickHandler()}>View Poll</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(QuestionCard);
