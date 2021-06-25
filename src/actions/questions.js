import { _saveQuestion } from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      firstOption,
      secondOption,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}
