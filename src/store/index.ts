import { createStore } from "vuex";
import AuthModule from "./auth";
import CategoryModule from "./category";
import ClientModule from "./client";
import OrderModule from "./order";
import ProductModule from "./product";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    category: CategoryModule,
    product: ProductModule,
    client: ClientModule,
    auth: AuthModule,
    order: OrderModule,
  },
});
