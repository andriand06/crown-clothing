import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const getCategoriesMap = createSelector(
  [selectCategoryReducer],
  (category) => {
    return category.reduce((acc, categories) => {
      const { title, items } = categories;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

//get data or payload from redux and transform it
