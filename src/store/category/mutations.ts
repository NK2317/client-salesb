import { SET_CURRENT_CATEGORIES } from "./mutation-types";
import { CategoryStateType, CategoryType } from "./types";

export const CategoryMutations = {
  [SET_CURRENT_CATEGORIES]: (
    state: CategoryStateType,
    payload: CategoryType[]
  ): void => {
    state.currentCategories = [...payload];
  },
};
