import { createStore } from "vuex";
import AuthModule from "./auth";
import CategoryModule from "./category";
import ClientModule from "./client";
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
  },
});
