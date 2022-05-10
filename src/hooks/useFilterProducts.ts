import { ProductType } from "@/store/product/types";
import { Ref, ref } from "vue";
import { useStore } from "vuex";

type ReturnType = {
  filterByFields: (filters: FieldFilterType[]) => Promise<void>;
  filterByTerm: (term: string) => Promise<void>;
  searchResults: Ref<ProductType[]>;
}

type FieldFilterType = {
  fieldName: string;
  fieldValue: unknown;
}

export default function useFilterProducts(): ReturnType {
  const store = useStore();
  const searchResults = ref<ProductType[]>([]);

  const filterByTerm = async (term: string) => {
    if (term) {
      const { error, data } = await store.dispatch("product/fetchByTerm", term);
      searchResults.value = data || [];
    } else {
      searchResults.value = [];
    }
  };

  const filterByFields = async (filters: FieldFilterType[]) => {
    if (filters.length) {
      const { error, data } = await store.dispatch("product/fetchByFields", filters);
      searchResults.value = data || [];
    } else {
      searchResults.value = [];
    }
  }

  return { filterByFields, filterByTerm, searchResults };
}
