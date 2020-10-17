<template>
  <header-section></header-section>
  <about-section></about-section>
  <features-section></features-section>
  <stories-section></stories-section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderSection from '@/components/home/layout/HeaderSection.vue';
import AboutSection from '@/components/home/layout/AboutSection.vue';
import FeaturesSection from '@/components/home/layout/FeaturesSection.vue';
import StoriesSection from '@/components/stories/layout/StoriesSection.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HeaderSection, FeaturesSection, AboutSection, StoriesSection
  },
});
</script>

<style lang="scss" scoped>
.section-about {
  background-color: $color-grey-light-1;
  padding: 25rem 0;
  margin-top: -20vh;
}
</style>