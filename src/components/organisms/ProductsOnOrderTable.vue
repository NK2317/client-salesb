<template>
  <TableDefault>
    <THeadDefault>
      <THeaderDefault v-for="header in headers" :key="header.id" scope="col">
        {{ header.label }}
      </THeaderDefault>
      <ActionsTHDefault />
    </THeadDefault>
    <TBodyDefault>
      <TRowDefault
        v-for="productOnOrder in props.productsOnOrderList"
        :key="productOnOrder.id"
      >
        <TDivisionDefault>
          {{ productOnOrder.Product.name }}
        </TDivisionDefault>
        <TDivisionDefault>
          {{ productOnOrder.Product.description }}
        </TDivisionDefault>
        <TDivisionDefault>
          {{ productOnOrder.Product.price }}
        </TDivisionDefault>
        <TDivisionDefault>
          {{ productOnOrder.qty }}
        </TDivisionDefault>
        <TDivisionDefault>
          {{ Math.round(productOnOrder.Product.price * productOnOrder.qty) }}
        </TDivisionDefault>
      </TRowDefault>
    </TBodyDefault>
  </TableDefault>
</template>
<script setup lang="ts">
import { ProductOnOrderType } from "@/store/order/types";
import { PropType, defineProps, defineEmits } from "vue";
import TableDefault from "@/components/atoms/TableDefault.vue";
import THeadDefault from "@/components/atoms/THeadDefault.vue";
import THeaderDefault from "@/components/atoms/THeaderDefault.vue";
import TBodyDefault from "@/components/atoms/TBodyDefault.vue";
import TRowDefault from "@/components/atoms/TRowDefault.vue";
import TDivisionDefault from "@/components/atoms/TDivisionDefault.vue";
import ActionsTHDefault from "@/components/atoms/ActionsTHDefault.vue";

const headers = [
  { id: 2, label: "Producto" },
  { id: 3, label: "Descripción" },
  { id: 4, label: "Precio por unidad" },
  { id: 4, label: "Cantidad" },
  { id: 4, label: "Sub total" },
];
const props = defineProps({
  productsOnOrderList: {
    type: Array as PropType<ProductOnOrderType[]>,
    default: () => [],
  },
});

defineEmits(["whatch"]);
</script>
