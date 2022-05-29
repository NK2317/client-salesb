import { Module } from "vuex";
import OrderActions from "./actions";
import OrderMutations from "./mutations";
import { OrderStateType } from "./types";

const OrderModule: Module<OrderStateType, unknown> = {
  namespaced: true,
  state: () => {
    return {
      currentOrders: [],
    };
  },
  mutations: { ...OrderMutations },
  actions: { ...OrderActions },
};

export default OrderModule;
