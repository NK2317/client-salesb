<template>
  <navbar-content :list="list" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavbarContent from "../molecules/NavbarContent.vue";

export default defineComponent({
  components: { NavbarContent },
  data() {
    return {
      list: [
        { id: 1, label: "Inicio", link: "/" },
        { id: 2, label: "Órdenes", link: "/orders" },
        { id: 3, label: "Estadístics", link: "/statistics" },
        { id: 5, label: "Login", link: "/login" },
        { id: 6, label: "Registrar Usuario", link: "/signup" },
      ],
    };
  },
});
</script>
