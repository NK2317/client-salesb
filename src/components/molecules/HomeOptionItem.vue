<template>
  <div
    tabindex="0"
    class="hover:cursor-pointer mx-2 w-72 xl:mb-0 mb-8 shadow-md transform transition hover:scale-105 hover:scale-105 pb-3 mt-3"
    @click="goPage"
  >
    <div>
      <img
        alt="person capturing an image"
        :src="img"
        tabindex="0"
        class="focus:outline-none w-full h-44"
        async
      />
    </div>
    <div class="bg-white">
      <div class="flex items-center justify-between px-4 pt-4">
        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
          <p
            tabindex="0"
            class="focus:outline-none text-xs text-yellow-700"
            v-if="onFeature"
          >
            Featured
          </p>
        </div>
      </div>
      <div class="p-4">
        <div class="flex items-center">
          <h2 tabindex="0" class="focus:outline-none text-2xl font-semibold">
            {{ title }}
          </h2>
        </div>
        <p tabindex="0" class="focus:outline-none text-xl text-gray-600 mt-2">
          {{ description }}
        </p>
        <div class="flex mt-4">
          <!--
            <div>
            <p
              tabindex="0"
              class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
            >
              12 months warranty
            </p>
          </div>
          <div class="pl-2">
            <p
              tabindex="0"
              class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
            >
              Complete box
            </p>
          </div>
          -->
        </div>
        <div class="flex items-center justify-between py-4">
          <h2
            tabindex="0"
            class="focus:outline-none text-indigo-700 text-xs font-semibold"
          >
            By NK2317
          </h2>
          <h3
            tabindex="0"
            class="focus:outline-none text-indigo-700 text-xl font-semibold"
          ></h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    onFeature: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    goTo: {
      type: String,
      default: "",
    },
  },
  methods: {
    goPage() {
      this.$router.push(this.goTo);
    },
  },
});
</script>
