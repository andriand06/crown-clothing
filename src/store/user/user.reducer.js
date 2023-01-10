import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
};
//without useReducer we need to declare initial data of our state
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
