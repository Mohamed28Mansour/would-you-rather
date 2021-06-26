import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
}

export function handleInitialData() {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

export function handleAddQuestion(firstOption, secondOption) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    try {
      const question = await _saveQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: authedUser,
      });
      return dispatch(addQuestion(question));
    } catch (err) {
      return console.log("Error adding question", err);
    }
  };
}

export function handleAddAnswer(questionId, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    try {
      _saveQuestionAnswer({
        authedUser,
        qid: questionId,
        answer: option,
      });
      return dispatch(addAnswer({ authedUser, questionId, option }));
    } catch (err) {
      console.log("Error answering question", err);
    }
  };
}
