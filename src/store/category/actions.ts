import { getStandardConfig } from "@/util/config";
import { getProcessedUrl } from "@/util/url";
import { ActionTree } from "vuex";
import { SET_CURRENT_CATEGORIES } from "./mutation-types";
import { CategoryStateType, CategoryType } from "./types";

type ResponseType = {
  data: CategoryType[];
  error: boolean | unknown;
};

const CategoryActions: ActionTree<CategoryStateType, unknown> = {
  async fetchAllCategories({ commit }): Promise<ResponseType> {
    try {
      const url = getProcessedUrl("/category");
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error fetching categories, please contact the admin");
      } else {
        commit(SET_CURRENT_CATEGORIES, data);
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },

  async submitCategory(
    _ctx,
    payload: CategoryType
  ): Promise<{ data: CategoryType | unknown; error: boolean | unknown }> {
    try {
      const url = getProcessedUrl("/category");
      const config = getStandardConfig({ method: "POST", body: payload });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error submiting category");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error: false, data: {} };
    }
  },

  async updateCategory(
    _ctx,
    payload: CategoryType
  ): Promise<{ data: CategoryType | unknown; error: boolean | unknown }> {
    try {
      const url = getProcessedUrl("/category");
      const config = getStandardConfig({ method: "PATCH", body: payload });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error submiting category");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error: false, data: {} };
    }
  },
};

export default CategoryActions;
