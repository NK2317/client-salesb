import { Module } from "vuex";
import ClientActions from "./actions";
import { ClientMutations } from "./mutations";
import { ClientStateType } from "./types";

const ClientModule: Module<ClientStateType, unknown> = {
  namespaced: true,
  state(): ClientStateType {
    return {
      currentClients: [],
    };
  },
  mutations: {
    ...ClientMutations,
  },
  actions: {
    ...ClientActions,
  },
};

export default ClientModule;

