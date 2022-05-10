<template>
  <button :class="buttonClass" :onclick="onClick" :type="buttonType">
    {{ text }}
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ButtonHTMLAttributes } from "vue";
type ButtonTypes = "blue" | "red" | "gray";
export default defineComponent({
  data() {
    return {
      map: {
        blue: "bg-blue-600 text-gray-100 hover:bg-blue-700 transition",
        red: "bg-red-600 text-gray-100 hover:bg-red-700 transition",
        gray: "bg-gray-600 text-gray-100 hover:bg-gray-700 transition",
      },
    };
  },
  props: {
    text: { type: String, default: "" },
    mode: { type: String as PropType<ButtonTypes>, default: "blue" },
    buttonType: {
      type: String as PropType<ButtonHTMLAttributes["type"]>,
      default: "button",
    },
  },
  methods: {
    onClick(event: Event) {
      this.$emit("click", event);
    },
  },
  computed: {
    buttonClass() {
      return `w-full h-12 rounded-lg ${this.map[this.mode]} font-semibold mb-4`;
    },
  },
});
</script>
