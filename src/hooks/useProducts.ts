import { ProductType } from "@/store/product/types";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

export type ResponseType = {
  products: ComputedRef<ProductType[]>;
  fetchProducts: (refetch?: boolean) => Promise<void>;
  submitProduct: (product: ProductType) => Promise<SubmitUpdateResponseType>;
  updateProduct: (product: ProductType) => Promise<SubmitUpdateResponseType>;
};

export type SubmitUpdateResponseType = {
  product: ProductType;
};

export default function useProducts(): ResponseType {
  const store = useStore();
  const products = computed(() => {
    return store.state.product.currentProducts || [];
  });

  const fetchProducts = async (refetch = false) => {
    if (!store.state.product.currentProducts.length || refetch) {
      const { error } = await store.dispatch("product/fetchAllProducts");
      if (error) {
        console.error(error);
        throw new Error(error?.message);
      }
    }
  };

  const submitProduct = async (product: ProductType) => {
    const { error, data } = await store.dispatch(
      "product/submitProduct",
      product
    );
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchProducts(true);
    return { product: data };
  };

  const updateProduct = async (product: ProductType) => {
    const { error, data } = await store.dispatch(
      "product/updateProduct",
      product
    );
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchProducts(true);
    return { product: data };
  }

  return { products, fetchProducts, submitProduct, updateProduct };
}
