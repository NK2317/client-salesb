<template>
  <div tabindex="0" class="focus:outline-none">
    <div class="mx-auto container py-8">
      <div class="flex flex-wrap items-center justify-center">
        <SearchResultItem v-for="item in resultList" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchResultItem from "@/components/molecules/SearchResultItem.vue";
import { defineComponent, PropType } from "@vue/runtime-core";
type SearchResultItemType = {
  id: number;
  image: string;
};

export default defineComponent({
  components: { SearchResultItem },
  props: {
    resultList: {
      type: Array as PropType<SearchResultItemType[]>,
    },
  },
});
</script>
