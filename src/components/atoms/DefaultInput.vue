<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :autocomplete="autocomplete || 'false'"
    :placeholder="placeHolder"
    :required="required"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    @change="onChange"
    @keydown="onKeyDown"
    @click="onClick"
    :value="startValue"
  />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    id: { required: true, type: String },
    name: { required: true, type: String },
    type: { type: String, default: "text" },
    required: { type: Boolean, default: false },
    placeHolder: { type: String, default: "" },
    autocomplete: { type: String, default: "" },
    startValue: { type: [String, Number], default: "" },
  },
  methods: {
    onChange(event: any) {
      this.$emit("change", event);
    },
    onKeyDown(event: any) {
      this.$emit("keyDown", event);
    },
    onClick(event: any) {
      this.$emit("click", event);
    },
  },
});
</script>
