<template>
  <div>
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Agregar Producto"
      :visible="showProductsModal"
      @close="showProductsModal = false"
    >
      <DefaultInput
        id="_searchProduct"
        name="Search product input"
        place-holder="Escribe el producto a buscar"
        @keydown="search"
      />
      <ProductListTable
        :products="productList"
        :selective-mode="true"
        @select="selectProduct"
      />
    </ContentModal>
    <NewOrderForm
      :selected-products="selectedProducts"
      @submit="submit"
      @openNewProductModal="showProductsModal = true"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import useProducts from "@/hooks/useProducts";
import NewOrderForm from "@/components/organisms/NewOrderForm.vue";
import ContentModal from "@/components/organisms/ContentModal.vue";
import ProductListTable from "@/components/organisms/ProductListTable.vue";
import DefaultInput from "@/components/atoms/DefaultInput.vue";
import { ProductType } from "@/store/product/types";
import { OrderProductPayload } from "@/store/order/types";
import useEmitter from "@/hooks/useEmitter";
import useFilterProducts from "@/hooks/useFilterProducts";
import { debounce } from "@/util/timing";
import useOrders from "@/hooks/useOrders";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "vue-router";

const router = useRouter();
const { products: allProductsList, fetchProducts } = useProducts();
const { submitOrder } = useOrders();
const { getAuthInfo } = useAuth();
const { filterByTerm, searchResults } = useFilterProducts();

const showProductsModal = ref(false);
const onAddProduct = ref<ProductType>();
const selectedProducts = ref<OrderProductPayload[]>([]);
const globalEmitter = useEmitter();
const productList = computed(() => {
  if (searchResults.value.length) return searchResults.value;
  return allProductsList.value;
});

const submit = async ({ clientForLoanId }: Record<string, string>) => {
  if (confirm("¿Deseas finalizar la compra?")) {
    const { userID } = getAuthInfo();
    await submitOrder({
      clientForLoanId: parseInt(clientForLoanId),
      userID: typeof userID == "string" ? parseInt(userID) : userID,
      selectedProducts: selectedProducts.value,
    });
    router.push("/orders");
  }
};

const selectProduct = (product: ProductType) => {
  if (selectedProducts.value.find((p) => p.product.id === product.id)) {
    alert("Este producto ya está en la lista, puedes cambiar la cantidad");
    return;
  }
  onAddProduct.value = product;
  const qty = prompt("Por favor digite la cantidad");
  if (qty) {
    selectedProducts.value.push({ qty: parseFloat(qty), product });
  }
};

const [search] = debounce((e: any) => {
  filterByTerm(e?.target?.value);
}, 1000);

globalEmitter.on("qtyProductEdit", (payload: OrderProductPayload) => {
  selectedProducts.value = selectedProducts.value.map((product) => {
    if (product.product.id === payload.product.id) {
      return {
        ...product,
        qty:
          typeof payload.qty === "string"
            ? parseFloat(payload.qty)
            : payload.qty,
      };
    }
    return product;
  });
});

globalEmitter.on("deleteSelectedProduct", (product: ProductType) => {
  selectedProducts.value = selectedProducts.value.filter(
    (p) => p.product.id !== product.id
  );
});

onMounted(async () => {
  await fetchProducts();
});
</script>
