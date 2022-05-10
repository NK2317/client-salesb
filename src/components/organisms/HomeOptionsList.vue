<template>
  <div tabindex="0" class="focus:outline-none">
    <div class="mx-auto container py-8">
      <div class="flex flex-wrap items-center justify-center">
        <HomeOptionItem
          v-for="item in listItems"
          :key="item.id"
          :on-feature="item.onFeature"
          :title="item.title"
          :description="item.description"
          :img="item.img"
          :go-to="item.goTo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HomeOptionItem from "@/components/molecules/HomeOptionItem.vue";
import { defineComponent, PropType } from "@vue/runtime-core";
type HomeOptionItemType = {
  id: number;
  onFeature: boolean;
  title: string;
  description: string;
  img: string;
  goTo: string;
};

export default defineComponent({
  components: { HomeOptionItem },
  props: {
    listItems: {
      type: Array as PropType<HomeOptionItemType[]>,
    },
  },
});
</script>
