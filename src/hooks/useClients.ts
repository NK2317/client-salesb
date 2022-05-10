import { ClientType } from "@/store/client/types";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

type ResponseType = {
  clients: ComputedRef<ClientType[]>;
  fetchClients: () => Promise<void>;
  submitClient: (
    clients: ClientType
  ) => Promise<MutateClientResponseType>;
  updateClient: (
    clients: ClientType
  ) => Promise<MutateClientResponseType>;
};

type MutateClientResponseType = {
  clients: ClientType | unknown;
};

export default function useCategories(): ResponseType {
  const store = useStore();
  const clients = computed(() => {
    return store.state.client.currentClients || [];
  });

  const fetchClients = async (refetch = false) => {
    if (!store.state.client.currentClients.length || refetch) {
      const { error } = await store.dispatch("client/fetchAllClients");
      if (error) {
        console.error(error);
        throw new Error(error?.message);
      }
    }
  };

  const submitClient = async (client: ClientType): Promise<MutateClientResponseType> => {
    const { error, data } = await store.dispatch(
      "client/submitClient",
      client
    );
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchClients(true);
    return { clients: data };
  };

  const updateClient = async (
    client: ClientType
  ): Promise<MutateClientResponseType> => {
    const { error, data } = await store.dispatch(
      "client/updateClient",
      client
    );
    if (error) {
      console.error(error);
      throw new Error(error?.message);
    }
    await fetchClients(true);
    return { clients: data };
  };

  return { clients, fetchClients, submitClient, updateClient };
}

