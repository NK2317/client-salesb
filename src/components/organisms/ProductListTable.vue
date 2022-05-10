<template>
  <table
    class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
    aria-describedby="products table"
  >
    <thead class="bg-gray-100 dark:bg-gray-700">
      <tr>
        <th
          v-for="header in headers"
          :key="header.id"
          scope="col"
          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
        >
          {{ header.label }}
        </th>
        <th scope="col" class="p-4">
          <span class="sr-only">Editar</span>
        </th>
      </tr>
    </thead>
    <tbody
      class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
    >
      <tr
        class="hover:bg-gray-100 dark:hover:bg-gray-700"
        v-for="product in props.products"
        :key="product.id"
      >
        <td
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.name }}
        </td>
        <td
          class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
        >
          {{ product?.description }}
        </td>
        <td
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.price }}
        </td>
        <td
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.unit }}
        </td>
        <td
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.Category?.name }}
        </td>
        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <a
            class="text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            @click="$emit('edit', product)"
          >
            Editar
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ProductType } from "@/store/product/types";
import { PropType, defineProps, defineEmits } from "vue";

const headers = [
  { id: 2, label: "Nombre" },
  { id: 3, label: "Descripción" },
  { id: 4, label: "Precio" },
  { id: 4, label: "Tipo de unidad" },
  { id: 4, label: "Categoría" },
];

const props = defineProps({
  products: { type: Array as PropType<ProductType[]>, default: () => [] },
});

defineEmits(["edit"]);
</script>
