<template>
  <form class="w-full h-screen flex items-center justify-center" @submit="(e) => { e.preventDefault(); $emit('submit', data) }">
    <div
      class="shadow-xl w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center space-y-4"
    >
      <label class="font-light text-4xl mb-4">
        <span class="font-bold">Crear Nuevo Usuario</span>
      </label
      >
      <DefaultInput
        id="_username"
        name="_username"
        place-holder="Nombre de usuario"
        type="text"
        required
        @change="(e: any) => data.username = e.target.value"
      />
      <DefaultInput
        id="_password"
        name="_password"
        place-holder="Contraseña"
        type="password"
        required
        @change="(e: any) => data.password = e.target.value"
      />
      <DefaultButton text="Registrar Usuario" button-type="submit" />
    </div>
  </form>
</template>
<script setup lang="ts">
import DefaultInput from '@/components/atoms/DefaultInput.vue';
import DefaultButton from '@/components/atoms/DefaultButton.vue';
import { ref, defineEmits } from 'vue';

const data = ref({ username: '', password: '' });
defineEmits(["submit"]);
</script>