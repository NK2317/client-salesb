import { getStandardConfig } from "@/util/config";
import { getProcessedUrl } from "@/util/url";
import { ActionTree } from "vuex";
import { SET_CURRENT_USER } from "./mutation-types";
import { AuthStateType, LoginPayloadType } from "./types";

const AuthActions: ActionTree<AuthStateType, unknown> = {
  async login({ commit }, body: LoginPayloadType) {
    try {
      const url = getProcessedUrl("/login");
      const config = getStandardConfig({ requireToken: false, method: "POST", body });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error trying to login, please contact the admin");
      } else {
        commit(SET_CURRENT_USER, data);
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },
};

export default AuthActions;

