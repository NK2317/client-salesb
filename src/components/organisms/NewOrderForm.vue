<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="submit">
    <div class="md:flex space-x-4">
      <div class="mb-4 md:w-1/4">
        Cliente (Solo si vas a fiar, selecciona el cliente)
        <DefaultSelect
          id="_clientSelect"
          name="Client select"
          :options="clientSelectionList"
          @change="(e: any) => clientForLoan = e.target.value"
        />
      </div>
      <div class="mb-4 md:w-1/4 text-2xl">
        Total: <strong>{{ total }}</strong>
      </div>
    </div>
    <div class="mb-4 md:w-1/4">
      <DefaultButton
        text="Añadir producto"
        @click="$emit('openNewProductModal')"
      />
      <DefaultButton text="Finalizar Venta" type="submit" />
    </div>
    <div class="mb-6">
      Productos seleccionados
      <ProductListTable
        :products="list"
        :new-order-mode="true"
        @delete="
          (product) => globalEmitter.emit('deleteSelectedProduct', product)
        "
        @updateQty="(payload) => globalEmitter.emit('qtyProductEdit', payload)"
      />
    </div>
  </form>
</template>
<script setup lang="ts">
import DefaultSelect from "@/components/atoms/DefaultSelect.vue";
import useClients from "@/hooks/useClients";
import {
  onMounted,
  computed,
  ref,
  defineEmits,
  PropType,
  defineProps,
} from "vue";
import ProductListTable from "@/components/organisms/ProductListTable.vue";
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import { OrderProductPayload } from "@/store/order/types";
import useEmitter from "@/hooks/useEmitter";

const { clients, fetchClients } = useClients();
const globalEmitter = useEmitter();
const emits = defineEmits(["submit", "openNewProductModal"]);
const props = defineProps({
  selectedProducts: {
    type: Array as PropType<OrderProductPayload[]>,
    default: () => [],
  },
});

const list = computed(() =>
  props.selectedProducts.map(({ product, qty }) => ({ ...product, qty }))
);
const clientForLoan = ref(null);
const total = computed(() =>
  props.selectedProducts.reduce(
    (acc, current) => acc + current.product.price * current.qty,
    0
  )
);
const clientSelectionList = computed(
  () => clients.value.map(({ name, id }) => ({ label: name, value: id })) || []
);

const submit = (e: Event) => {
  e.preventDefault();
  emits("submit", { clientForLoanId: clientForLoan.value });
};

onMounted(async () => {
  await fetchClients();
});
</script>
