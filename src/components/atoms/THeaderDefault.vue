<template>
  <th
    :scope="scope"
    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
  >
    <slot />
  </th>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    scope: {
      type: String,
      default: "col",
    },
  },
});
</script>
