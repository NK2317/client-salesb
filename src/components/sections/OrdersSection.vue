<template>
  <div class="w-full">
    <div class="p-3 text-3xl">Órdenes</div>
    <div class="md:w-1/12">
      <DefaultButton text="Agregar" @click="$router.push('/orders/new')" />
    </div>
    <OrderListTable :orders="orders" @whatch="handleWhatch" />
  </div>
</template>
<script setup lang="ts">
import OrderListTable from "@/components/organisms/OrderListTable.vue";
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import useOrders from "@/hooks/useOrders";

const { orders, fetchOrders } = useOrders();
const router = useRouter();

const handleWhatch = (id: number) => {
  const order = orders.value.find((o) => o.id === id);
  localStorage.setItem("order/currentOrder", JSON.stringify(order));
  router.push(`/orders/${id}`);
};

onMounted(() => {
  fetchOrders();
});
</script>
