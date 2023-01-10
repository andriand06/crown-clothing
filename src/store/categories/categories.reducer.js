import { CATEGORIES_ACTION_TYPES } from "./categories.type";
export const categoriesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
