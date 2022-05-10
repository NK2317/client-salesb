import { SET_CURRENT_CLIENTS } from "./mutation-types";
import { ClientStateType, ClientType } from "./types";

export const ClientMutations = {
  [SET_CURRENT_CLIENTS]: (
    state: ClientStateType,
    payload: ClientType[]
  ): void => {
    state.currentClients = [...payload];
  },
};

