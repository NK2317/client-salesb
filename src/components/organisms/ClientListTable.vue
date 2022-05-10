<template>
  <table
    class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
    aria-describedby="clients table"
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
          <span class="sr-only">Acciones</span>
        </th>
      </tr>
    </thead>
    <tbody
      class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
    >
      <tr
        class="hover:bg-gray-100 dark:hover:bg-gray-700"
        v-for="client in props.clients"
        :key="client.id"
      >
        <td
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ client?.name }}
        </td>
        <td
          class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
        >
          {{ client?.status }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ClientType } from "@/store/client/types";
import { PropType, defineProps, defineEmits } from "vue";

const headers = [
  { id: 2, label: "Nombre" },
  { id: 3, label: "Estatus" },
];

const props = defineProps({
  clients: { type: Array as PropType<ClientType[]>, default: () => [] },
});

defineEmits(["edit"]);
</script>
