import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION, ADD_ANSWER } from "../actions/shared";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      const { answer } = action;
      return {
        ...state,
        [answer.questionId]: {
          ...state[answer.questionId],
          [answer.option]: {
            ...state[answer.questionId][answer.option],
            votes: state[answer.questionId][answer.option].votes.concat([
              answer.authedUser,
            ]),
          },
        },
      };

    default:
      return state;
  }
}
