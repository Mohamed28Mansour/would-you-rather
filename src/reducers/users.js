import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ADD_ANSWER } from "../actions/shared";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
        },
      };
    case ADD_ANSWER:
      const { answer } = action;
      return {
        ...state,
        [answer.authedUser]: {
          ...state[answer.authedUser],
          answers: {
            ...state[answer.authedUser].answers,
            [answer.questionId]: answer.option,
          },
        },
      };

    default:
      return state;
  }
}
