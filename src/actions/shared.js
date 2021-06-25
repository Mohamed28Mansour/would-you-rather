import { _getUsers, _getQuestions } from "../_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

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
