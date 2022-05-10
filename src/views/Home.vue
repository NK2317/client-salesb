<template>
  <div>
    <div class="w-full text-center">
      <div class="p-3">
        <HomeOptionsList :list-items="HomeModules" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeOptionsList from "@/components/organisms/HomeOptionsList.vue";
import { HomeModules } from "@/constants";
</script>
