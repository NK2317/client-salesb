import { Module } from "vuex";
import AuthActions from "./actions";
import { AuthMutations } from "./mutations";
import { AuthStateType } from "./types";

const AuthModule: Module<AuthStateType, unknown> = {
  namespaced: true,
  state(): AuthStateType {
    return {
      currentUser: { userID: 0, userName: "default", accessToken: "" },
    };
  },
  mutations: {
    ...AuthMutations,
  },
  actions: {
    ...AuthActions,
  },
};

export default AuthModule;
