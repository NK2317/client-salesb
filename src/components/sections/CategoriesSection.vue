<template>
  <div class="w-full">
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Agregar Categoría"
      :visible="visible"
    >
      <NewCategoryForm @submit="submit" @cancel="() => (visible = false)" />
    </ContentModal>
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Agregar Categoría"
      :visible="visibleCategoryEditModal"
    >
      <UpdateCategoryForm
        :category="categoryOnEdit"
        @submit="submitUpdate"
        @cancel="() => (visibleCategoryEditModal = false)"
      />
    </ContentModal>
    <div class="p-3 text-3xl">Categorías</div>
    <div class="md:w-1/12">
      <DefaultButton text="Agregar" @click="visible = true" />
    </div>
    <CategoryListTable :categories="categories" @edit="editCategory" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import useCategories from "@/hooks/useCategories";
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import ContentModal from "@/components/organisms/ContentModal.vue";
import NewCategoryForm from "@/components/molecules/NewCategoryForm.vue";
import { CategoryPayload } from "@/store/category/types";
import UpdateCategoryForm from "@/components/molecules/UpdateCategoryForm.vue";
import CategoryListTable from "@/components/organisms/CategoryListTable.vue";
// state
const visible = ref(false);
const categoryOnEdit = ref<CategoryPayload>({
  name: "",
  description: "",
  id: 0,
});
const visibleCategoryEditModal = ref(false);
// functions
const submitUpdate = async (data: CategoryPayload) => {
  await updateCategory({ ...data, id: categoryOnEdit.value.id });
  visibleCategoryEditModal.value = false;
};

const editCategory = (data: CategoryPayload) => {
  visibleCategoryEditModal.value = true;
  categoryOnEdit.value = data;
};

const submit = async (data: CategoryPayload) => {
  await submitCategory(data);
  visible.value = false;
};
// hook call
const { categories, fetchCategories, submitCategory, updateCategory } =
  useCategories();

onMounted(() => {
  fetchCategories();
});
</script>
