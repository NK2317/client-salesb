<template>
  <select
    class="shadow border rounded w-full py-2 px-3 bg-white"
    aria-label="Default select example"
    :id="id"
    :name="name"
    @change="onChange"
    :required="required"
    :value="startValue"
  >
    <option>Seleccione</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

type OptionType = {
  value: number | string | undefined;
  label: string;
};

export default defineComponent({
  props: {
    options: { type: Array as PropType<OptionType[]>, defualt: [] },
    id: { type: String, required: true },
    name: { type: String, required: true },
    required: { type: Boolean, default: false },
    startValue: { type: [String, Number], default: "" },
  },
  methods: {
    onChange(event: Event) {
      this.$emit("change", event);
    },
  },
});
</script>
