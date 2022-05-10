import { CategoryPayload, CategoryType } from "@/store/category/types";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

type ResponseType = {
  categories: ComputedRef<CategoryType[]>;
  fetchCategories: () => Promise<void>;
  submitCategory: (
    category: CategoryPayload
  ) => Promise<MutateCategoryResponseType>;
  updateCategory: (
    category: CategoryPayload
  ) => Promise<MutateCategoryResponseType>;
};

type MutateCategoryResponseType = {
  category: CategoryPayload | unknown;
};

export default function useCategories(): ResponseType {
  const store = useStore();
  const categories = computed(() => {
    return store.state.category.currentCategories || [];
  });

  const fetchCategories = async (refetch = false) => {
    if (!store.state.category.currentCategories.length || refetch) {
      const { error } = await store.dispatch("category/fetchAllCategories");
      if (error) {
        console.error(error);
        throw new Error(error?.message);
      }
    }
  };

  const submitCategory = async (
    category: CategoryPayload
  ): Promise<MutateCategoryResponseType> => {
    const { error, data } = await store.dispatch(
      "category/submitCategory",
      category
    );
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchCategories(true);
    return { category: data };
  };

  const updateCategory = async (
    category: CategoryPayload
  ): Promise<MutateCategoryResponseType> => {
    const { error, data } = await store.dispatch(
      "category/updateCategory",
      category
    );
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchCategories(true);
    return { category: data };
  };

  return { categories, fetchCategories, submitCategory, updateCategory };
}
