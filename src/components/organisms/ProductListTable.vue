<template>
  <TableDefault aria-describedby="products table">
    <THeadDefault>
      <THeadDefault v-for="header in headers" :key="header.id" scope="col">
        {{ header.label }}
      </THeadDefault>
      <THeadDefault scope="col" v-if="newOrderMode"> Cantidad </THeadDefault>
      <ActionsTHDefault />
    </THeadDefault>
    <TBodyDefault>
      <TRowDefault v-for="product in props.products" :key="product.id">
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.name }}
        </TDivisionDefault>
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
        >
          {{ product?.description }}
        </TDivisionDefault>
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <span class="text-green-600">{{ product?.price }}</span>
        </TDivisionDefault>
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.unit }}
        </TDivisionDefault>
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product?.Category?.name }}
        </TDivisionDefault>
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
          v-if="newOrderMode"
        >
          <DefaultInput
            :id="`_productQty${product.id}`"
            name="Product Qty input"
            @change="(e: any) => $emit('updateQty', { product, qty: e.target.value })"
            :start-value="product?.qty"
          />
        </TDivisionDefault>
        <TDivisionDefault
          class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
          v-if="!showOnlyMode"
        >
          <a
            class="text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            @click="$emit('select', product)"
            v-if="selectiveMode"
          >
            Seleccionar
          </a>
          <a
            class="text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            @click="$emit('edit', product)"
            v-if="!selectiveMode && !showOnlyMode && !newOrderMode"
          >
            Editar
          </a>
          <a
            class="text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            @click="$emit('delete', product)"
            v-if="!showOnlyMode && !selectiveMode"
          >
            Eliminar
          </a>
        </TDivisionDefault>
      </TRowDefault>
    </TBodyDefault>
  </TableDefault>
</template>
<script setup lang="ts">
import { ProductType } from "@/store/product/types";
import { PropType, defineProps, defineEmits } from "vue";
import DefaultInput from "@/components/atoms/DefaultInput.vue";
import THeadDefault from "@/components/atoms/THeadDefault.vue";
import ActionsTHDefault from "@/components/atoms/ActionsTHDefault.vue";
import TBodyDefault from "@/components/atoms/TBodyDefault.vue";
import TRowDefault from "@/components/atoms/TRowDefault.vue";
import TDivisionDefault from "@/components/atoms/TDivisionDefault.vue";
import TableDefault from "@/components/atoms/TableDefault.vue";

const headers = [
  { id: 2, label: "Nombre" },
  { id: 3, label: "Descripción" },
  { id: 4, label: "Precio" },
  { id: 4, label: "Tipo de unidad" },
  { id: 4, label: "Categoría" },
];
const props = defineProps({
  products: { type: Array as PropType<ProductType[]>, default: () => [] },
  selectiveMode: { type: Boolean, default: false },
  showOnlyMode: { type: Boolean, default: false },
  newOrderMode: { type: Boolean, default: false },
});

defineEmits(["edit", "select", "qtyEdit", "delete", "updateQty"]);
</script>
