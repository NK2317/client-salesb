<template>
  <div class="w-full">
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Agregar Categoría"
      :visible="visible"
    >
      <NewClientForm @submit="submit" @cancel="() => (visible = false)" />
    </ContentModal>
    <ContentModal
      accept-text="Aceptar"
      decline-text="Cancelar"
      title="Agregar Categoría"
      :visible="visibleEdit"
    >
      <UpdateClientForm
        :client="clientOnEdit"
        @submit="submitUpdate"
        @cancel="() => (visibleEdit = false)"
      />
    </ContentModal>
    <div class="p-3 text-3xl">Clientes</div>
    <div class="md:w-1/12">
      <DefaultButton text="Agregar" @click="visible = true" />
    </div>
    <ClientListTable :clients="clients" @edit="editCategory" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import useClients from "@/hooks/useClients";
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import ContentModal from "@/components/organisms/ContentModal.vue";
import NewClientForm from "@/components/molecules/NewClientForm.vue";
import { ClientType } from "@/store/client/types";
import UpdateClientForm from "@/components/molecules/UpdateClientForm.vue";
import ClientListTable from "@/components/organisms/ClientListTable.vue";
// state
const visible = ref(false);
const clientOnEdit = ref<ClientType>({
  id: 0,
  name: "",
  status: "",
});
const visibleEdit = ref(false);
// functions
const submitUpdate = async (data: ClientType) => {
  await updateClient({ ...data, id: clientOnEdit.value.id });
  visibleEdit.value = false;
};

const editCategory = (data: ClientType) => {
  visibleEdit.value = true;
  clientOnEdit.value = data;
};

const submit = async (data: ClientType) => {
  await submitClient(data);
  visible.value = false;
};
// hook call
const { clients, fetchClients, submitClient, updateClient } =
  useClients();

onMounted(() => {
  fetchClients();
});
</script>
