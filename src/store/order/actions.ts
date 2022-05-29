import { getStandardConfig } from "@/util/config";
import { getProcessedUrl } from "@/util/url";
import fetch from "isomorphic-fetch";
import { ActionTree } from "vuex";
import { SET_CURRENT_ORDER_LIST } from "./mutation-types";
import { OrderPayloadType, OrderStateType } from "./types";

const OrderActions: ActionTree<OrderStateType, unknown> = {
  async fetchAllOrders({ commit }) {
    try {
      const url = getProcessedUrl("/order");
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Unable to fetch orders");
      } else {
        commit(SET_CURRENT_ORDER_LIST, data);
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },

  async submitOrder(_, body: OrderPayloadType) {
    try {
      const url = getProcessedUrl("/sales");
      const config = getStandardConfig({ method: "POST", body });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Unable to submit order");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      console.error(error);
      return { error, data: {} };
    }
  },

  async fetchOrderById(_, orderID: number) {
    try {
      const url = getProcessedUrl(`/sales/${orderID}`);
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();

      if (error) {
        console.error(error);
        throw new Error("Unable to fetch order");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: {} };
    }
  },
};

export default OrderActions;
