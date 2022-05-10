import { Module } from "vuex";
import ProductActions from "./actions";
import { ProductMutations } from "./mutations";
import { ProductStateType } from "./types";

const ProductModule: Module<ProductStateType, unknown> = {
  namespaced: true,
  state(): ProductStateType {
    return {
      currentProducts: [],
    };
  },
  mutations: {
    ...ProductMutations,
  },
  actions: {
    ...ProductActions,
  },
};

export default ProductModule;
