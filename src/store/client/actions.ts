import { getStandardConfig } from "@/util/config";
import { getProcessedUrl } from "@/util/url";
import { ActionTree } from "vuex";
import { SET_CURRENT_CLIENTS } from "./mutation-types";
import { ClientStateType, ClientType } from "./types";

const ClientActions: ActionTree<ClientStateType, unknown> = {
  async fetchAllClients({ commit }) {
    try {
      const url = getProcessedUrl("/client");
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error fetching clients, please contact the admin");
      } else {
        commit(SET_CURRENT_CLIENTS, data);
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },

  async fetchByName(_ctx, name: string) {
    try {
      const url = getProcessedUrl("/client/filter-by-name", { name });
      const config = getStandardConfig();
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error fetching clients, please contact the admin");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error, data: [] };
    }
  },

  async submitClient(
    _ctx,
    payload: ClientType
  ): Promise<{ data: ClientType | unknown; error: boolean | unknown }> {
    try {
      const url = getProcessedUrl("/client");
      const config = getStandardConfig({ method: "POST", body: payload });
      const { error, data } = await (await fetch(url, config)).json();
      if (error) {
        console.error(error);
        throw new Error("Error submiting client");
      } else {
        return { error: false, data };
      }
    } catch (error) {
      return { error: false, data: {} };
    }
  },
};

export default ClientActions;
