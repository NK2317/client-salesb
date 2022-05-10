import { Module } from "vuex";
import CategoryActions from "./actions";
import { CategoryMutations } from "./mutations";
import { CategoryStateType } from "./types";

const CategoryModule: Module<CategoryStateType, unknown> = {
  namespaced: true,
  state(): CategoryStateType {
    return {
      currentCategories: [],
    };
  },
  mutations: {
    ...CategoryMutations,
  },
  actions: {
    ...CategoryActions,
  },
};

export default CategoryModule;
