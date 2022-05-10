import { SET_CURRENT_PRODUCTS } from "./mutation-types";
import { ProductStateType, ProductType } from "./types";

export const ProductMutations = {
  [SET_CURRENT_PRODUCTS]: (
    state: ProductStateType,
    payload: ProductType[]
  ): void => {
    state.currentProducts = [...payload];
  },
};
