<template>
  <div class="w-full">
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Agregar Producto"
      :visible="addVisible"
    >
      <NewProductForm @submit="submit" @cancel="() => (addVisible = false)" />
    </ContentModal>
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Modificar Producto"
      :visible="updateVisible"
    >
      <UpdateProductForm
        @submit="submitUpdate"
        @cancel="() => (updateVisible = false)"
        :product="onUpdateRecord"
      />
    </ContentModal>
    <div class="p-3 text-3xl">Productos</div>
    <div class="md:w-1/12">
      <DefaultButton text="Agregar" @click="addVisible = true" />
    </div>
    <div class="md:w-1/4 mb-4">
      <DefaultInput
        id="_searchTerm"
        name="Search term"
        text="Search"
        placeholder="Escribe para buscar"
        @keydown="search"
      />
    </div>
    <ProductListTable :products="productList" @edit="setUpdate" />
  </div>
</template>
<script setup lang="ts">
import ProductListTable from "@/components/organisms/ProductListTable.vue";
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import ContentModal from "@/components/organisms/ContentModal.vue";
import NewProductForm from "@/components/molecules/NewProductForm.vue";
import UpdateProductForm from "@/components/molecules/UpdateProductForm.vue";
import { onMounted, ref } from "vue";
import DefaultInput from "@/components/atoms/DefaultInput.vue";
import useProducts from "@/hooks/useProducts";
import { ProductType } from "@/store/product/types";
import { debounce } from "@/util/timing";
import useFilterProducts from "@/hooks/useFilterProducts";
import { computed } from "@vue/reactivity";

const { products, fetchProducts, submitProduct, updateProduct } = useProducts();
const { filterByTerm, searchResults } = useFilterProducts();
const addVisible = ref(false);
const updateVisible = ref(false);
const onUpdateRecord = ref<ProductType>({
  id: 0,
  name: "",
  description: "",
  price: 0,
  unit: "",
  categoryID: 0,
});

const productList = computed(() => {
  if(searchResults.value.length) return searchResults.value;
  return products.value;
})

const setUpdate = (product: ProductType) => {
  onUpdateRecord.value = product;
  updateVisible.value = true;
};

const submit = async (product: ProductType) => {
  await submitProduct(product);
  searchResults.value = [];
  addVisible.value = false;
};

const submitUpdate = async (data: ProductType) => {
  await updateProduct({ ...data, id: onUpdateRecord.value.id });
  searchResults.value = [];
  updateVisible.value = false;
}

const [search] = debounce((e: any) => {
  filterByTerm(e?.target?.value)
}, 1000);

onMounted(() => {
  fetchProducts();
});
</script>
