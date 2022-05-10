import { getStandardConfig } from "@/util/config";
import { getProcessedUrl } from "@/util/url";
import { ActionTree } from "vuex";
import { SET_CURRENT_PRODUCTS } from "./mutation-types";
import { ProductStateType, ProductType } from "./types";

const ProductActions: ActionTree<ProductStateType, unknown> = {
  async fetchAllProducts({ commit }) {
    try {
      const url = getProcessedUrl("/product");
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error fetching products, please contact the admin");
      } else {
        commit(SET_CURRENT_PRODUCTS, data);
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },

  async submitProduct(
    _ctx,
    payload: ProductType
  ): Promise<{ data: ProductType | unknown; error: boolean | unknown }> {
    try {
      const url = getProcessedUrl("/product");
      const config = getStandardConfig({ method: "POST", body: payload });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error submiting product");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error: false, data: {} };
    }
  },

  async updateProduct(
    _ctx,
    payload: ProductType
  ): Promise<{ data: ProductType | unknown; error: boolean | unknown }> {
    try {
      const url = getProcessedUrl("/product");
      const config = getStandardConfig({ method: "PATCH", body: payload });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error updating product");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error: false, data: {} };
    }
  },

  async fetchByTerm(_ctx, term: string) {
    try {
      const url = getProcessedUrl("/product/filter-by-term", { term });
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error fetching products, please contact the admin");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },
};

export default ProductActions;
