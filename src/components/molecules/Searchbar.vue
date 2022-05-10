<template>
  <div class="space-x-2">
    <button-default @click="clear">Clear filters</button-default>
    <button-default @click="displayFilters">Show filters</button-default>
    <input
      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-1"
      type="text"
      v-model="searchTerm"
      @keyup="
        () => {
          if (searchTerm === '') clear();
        }
      "
    />
    <button-default @click="search">Search</button-default>
  </div>
</template>
<script lang="ts">
import ButtonDefault from "@/components/atoms/ButtonDefault.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ButtonDefault },
  data() {
    return { searchTerm: "" };
  },
  methods: {
    search() {
      this.$emit("onSearch", this.searchTerm);
    },
    clear() {
      this.searchTerm = "";
      this.$emit("onClear");
    },
    displayFilters() {
      this.$emit("displayFilters");
    },
  },
});
</script>
