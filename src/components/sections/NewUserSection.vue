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
      <DefaultInput
        id="_name"
        name="_name"
        place-holder="Nombre"
        type="text"
        required
        @change="(e: any) => data.name = e.target.value"
      />
       <DefaultInput
        id="_sname"
        name="_sname"
        place-holder="Apellido"
        type="text"
        required
        @change="(e: any) => data.sname = e.target.value"
      />
       <DefaultInput
        id="_company"
        name="_company"
        place-holder="Empresa"
        type="text"
        required
        @change="(e: any) => data.company = e.target.value"
      />
       <DefaultInput
        id="_addr"
        name="_addr"
        place-holder="Direccion"
        type="text"
        required
        @change="(e: any) => data.addr = e.target.value"
      />
       <DefaultInput
        id="_email"
        name="_email"
        place-holder="Email"
        type="email"
        required
        @change="(e: any) => data.email = e.target.value"
      />
       <DefaultInput
        id="_phone"
        name="_phone"
        place-holder="Telefono"
        type="text"
        required
        @change="(e: any) => data.phone = e.target.value"
      />
      <DefaultButton text="Registrar Usuario" button-type="submit" />
      <DefaultButton text="Borrar Campos" button-type="reset" />
    </div>
  </form>
</template>
<script setup lang="ts">
import DefaultInput from '@/components/atoms/DefaultInput.vue';
import DefaultButton from '@/components/atoms/DefaultButton.vue';
import { ref, defineEmits } from 'vue';

const data = ref({ username: '', password: '' , name: '', sname: '', company:'', addr:'', email:'', phone:''});
defineEmits(["submit"]);
</script>