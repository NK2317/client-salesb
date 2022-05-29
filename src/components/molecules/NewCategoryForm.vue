<template>
  <form @submit="submit">
    <div class="bg-gray-50 px-4 py-3 sm:px-6 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="mt-3 text-center sm:mt-0 sm:ml-4">
        <DialogTitle
          as="h3"
          class="text-lg leading-6 font-medium text-gray-900"
        >
          <strong>Registrar Categoría</strong>
        </DialogTitle>
        <div class="mt-2">
          <div class="w-full">
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
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-3 sm:px-6 flex">
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
import { ref, defineEmits } from "vue";

const data = ref({ name: "", description: "" });
const emit = defineEmits(["submit", "cancel"]);
const submit = (e: Event) => {
  e.preventDefault();
  emit("submit", data.value);
};
</script>
