import { LOGOUT, LOGIN_REQUEST } from "../constants/userConstants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGOUT:
      return { logedin: action.payload };
    case LOGIN_REQUEST:
      return { logedin: action.payload };
    default:
      return state;
  }
};
