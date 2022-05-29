<template>
  <div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="md:flex space-x-4">
        <div class="mb-4 md:w-1/4">Order ID: {{ order?.id }}</div>
        <div class="mb-4 md:w-1/4 text-2xl">
          Total: <strong>{{ order?.amount }}</strong>
        </div>
        <div class="mb-4 md:w-1/4">
          Creada por: <strong>{{ order?.UserCreator?.userName }}</strong>
        </div>
        <div class="mb-4 md:w-1/4">
          Fecha: <strong>{{ order?.creationDate.slice(0, 10) }}</strong>
        </div>
      </div>
    </div>
    <ProductsOnOrderTable :products-on-order-list="orderDetails" />
  </div>
</template>
<script setup lang="ts">
import useOrders from "@/hooks/useOrders";
import { OrderType, ProductOnOrderType } from "@/store/order/types";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ProductsOnOrderTable from "@/components/organisms/ProductsOnOrderTable.vue";

const route = useRoute();
const orderDetails = ref<ProductOnOrderType[]>();
const order = ref<OrderType>();
const { fetchOrderById } = useOrders();

const fetchData = async () => {
  const { id } = route.params;
  const json = localStorage.getItem("order/currentOrder");

  if (typeof id == "string") {
    orderDetails.value = await fetchOrderById(parseInt(id));
  }
  if (json) {
    order.value = JSON.parse(json);
  }
};

onMounted(async () => {
  await fetchData();
});
</script>
