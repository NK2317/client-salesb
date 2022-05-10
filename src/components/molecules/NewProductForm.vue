<template>
  <form @submit="submit">
    <div
      class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
    >
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-start">
          <DialogTitle
            as="h3"
            class="text-lg leading-6 font-medium text-gray-900"
          >
            <strong>Registrar Producto</strong>
          </DialogTitle>
          <div class="mt-2">
            <div class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="_name"
                  >
                    Nombre
                  </label>
                  <DefaultInput
                    id="_name"
                    name="_name"
                    required
                    @change="(e: any) => (data.name = e?.target?.value)"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="_description"
                  >
                    Descripción
                  </label>
                  <DefaultInput
                    id="_description"
                    name="_description"
                    required
                    @change="(e: any) => (data.description = e?.target?.value)"
                  />
                </div>
              </div>
            </div>
            <div class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="_price"
                  >
                    Precio
                  </label>
                  <DefaultInput
                    id="_price"
                    name="_price"
                    required
                    type="decimal"
                    @change="(e: any) => (data.price = parseFloat(e?.target?.value))"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="_unit"
                  >
                    Unidad
                  </label>
                  <DefaultInput
                    id="_unit"
                    name="_unit"
                    required
                    @change="(e: any) => (data.unit = e?.target?.value)"
                  />
                </div>
              </div>
            </div>
            <div class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="_categorySelect"
                  >
                    Categoría
                  </label>
                  <DefaultSelect
                    id="_categorySelect"
                    name="category select"
                    :options="categoryOptions"
                    required
                    @change="(e: any) => (data.categoryID = parseInt(e?.target?.value))"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <div class="w-full md:1-1/3 p-2">
        <DefaultButton text="Aceptar" type="submit" />
      </div>
      <div class="w-full md:1-1/3 p-2">
        <DefaultButton text="Cancelar" mode="red" @click="emit('cancel')" />
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import DefaultInput from "@/components/atoms/DefaultInput.vue";
import DefaultSelect from "@/components/atoms/DefaultSelect.vue";
import { ref, defineEmits, computed, onMounted } from "vue";
import useCategories from "@/hooks/useCategories";
import { ProductType } from "@/store/product/types";

const { fetchCategories, categories } = useCategories();

const data = ref<ProductType>({
  name: "",
  description: "",
  price: 0,
  unit: "",
  categoryID: 0,
});
const emit = defineEmits(["submit", "cancel"]);
const categoryOptions = computed(() => {
  return (
    categories.value?.map(({ id, name }) => ({
      id,
      label: name,
      value: id,
    })) || []
  );
});

const submit = (e: Event) => {
  e.preventDefault();
  emit("submit", data.value);
};
onMounted(() => {
  fetchCategories();
});
</script>
