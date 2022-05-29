import { MutationTree } from "vuex";
import { SET_CURRENT_ORDER_LIST } from "./mutation-types";
import { OrderStateType, OrderType } from "./types";

const OrderMutations: MutationTree<OrderStateType> = {
  [SET_CURRENT_ORDER_LIST]: (state, payload: OrderType[]) => {
    state.currentOrders = payload;
  },
};

export default OrderMutations;
