export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function setLogOutAuthedUser() {
  return {
    type: LOGOUT_AUTHED_USER,
  };
}

export function handleAuthedUser(id) {
  return (dispatch) => {
    return dispatch(setAuthedUser(id));
  };
}

export function handleLogOutAuthedUser(id) {
  return (dispatch) => {
    return dispatch(setLogOutAuthedUser(id));
  };
}
