import {
  OrderPayloadType,
  OrderType,
  ProductOnOrderType,
} from "@/store/order/types";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

type ResponseType = {
  orders: ComputedRef<OrderType[]>;
  fetchOrders: () => Promise<void>;
  submitOrder: (payload: OrderPayloadType) => Promise<MutateOrderResponseType>;
  fetchOrderById: (id: number) => Promise<ProductOnOrderType[]>;
};

type MutateOrderResponseType = {
  orders: OrderType | unknown;
};

export default function useOrders(): ResponseType {
  const store = useStore();
  const orders = computed(() => {
    return store.state.order.currentOrders || [];
  });

  const fetchOrders = async (refetch = false) => {
    if (!store.state.order.currentOrders.length || refetch) {
      const { error } = await store.dispatch("order/fetchAllOrders");
      if (error) {
        console.error(error);
        throw new Error(error?.message);
      }
    }
  };

  const submitOrder = async (
    payload: OrderPayloadType
  ): Promise<MutateOrderResponseType> => {
    const { error, data } = await store.dispatch("order/submitOrder", payload);
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchOrders(true);
    return { orders: data };
  };

  const fetchOrderById = async (id: number) => {
    const { error, data } = await store.dispatch("order/fetchOrderById", id);
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    return data;
  };

  return { orders, fetchOrders, submitOrder, fetchOrderById };
}
