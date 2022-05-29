<template>
  <TableDefault>
    <THeadDefault>
      <THeaderDefault v-for="header in headers" :key="header.id" scope="col">
        {{ header.label }}
      </THeaderDefault>
      <ActionsTHDefault />
    </THeadDefault>
    <TBodyDefault>
      <TRowDefault v-for="order in props.orders" :key="order.id">
        <TDivisionDefault>
          {{ order.creationDate.slice(0, 10) }}
        </TDivisionDefault>
        <TDivisionDefault>
          <span class="text-green-600">{{ order.amount }}</span>
        </TDivisionDefault>
        <TDivisionDefault>
          {{ order?.Client?.name || "No fiado" }}
        </TDivisionDefault>
        <TDivisionDefault>
          {{ order.UserCreator?.userName }}
        </TDivisionDefault>
        <TDivisionDefault>
          {{ order.status ? "Completada" : "No completada" }}
        </TDivisionDefault>
        <TDivisionDefault>
          <a
            class="text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            @click="$emit('whatch', order.id)"
          >
            Ver más
          </a>
        </TDivisionDefault>
      </TRowDefault>
    </TBodyDefault>
  </TableDefault>
</template>
<script setup lang="ts">
import { OrderType } from "@/store/order/types";
import { PropType, defineProps, defineEmits } from "vue";
import TableDefault from "@/components/atoms/TableDefault.vue";
import THeadDefault from "@/components/atoms/THeadDefault.vue";
import THeaderDefault from "@/components/atoms/THeaderDefault.vue";
import TBodyDefault from "@/components/atoms/TBodyDefault.vue";
import TRowDefault from "@/components/atoms/TRowDefault.vue";
import TDivisionDefault from "@/components/atoms/TDivisionDefault.vue";
import ActionsTHDefault from "@/components/atoms/ActionsTHDefault.vue";

const headers = [
  { id: 2, label: "Fecha de creación" },
  { id: 3, label: "Total" },
  { id: 4, label: "Fiado" },
  { id: 4, label: "Creado por" },
  { id: 4, label: "Status" },
];
const props = defineProps({
  orders: { type: Array as PropType<OrderType[]>, default: () => [] },
});

defineEmits(["whatch"]);
</script>
