<template>
  <div class="home">
    <header-section></header-section>
    <about-section></about-section>
    <features-section></features-section>
    <tours-section></tours-section>
    <stories-section></stories-section>
    <booking-section></booking-section>
    <footer-section></footer-section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderSection from '@/components/home/layout/HeaderSection.vue';
import AboutSection from '@/components/home/layout/AboutSection.vue';
import FeaturesSection from '@/components/home/layout/FeaturesSection.vue';
import StoriesSection from '@/components/stories/layout/StoriesSection.vue';
import ToursSection from '@/components/tours/layout/ToursSection.vue';
import FooterSection from '@/components/home/layout/FooterSection.vue';
import BookingSection from '@/components/booking/layout/BookingSection.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HeaderSection, FeaturesSection, AboutSection, StoriesSection, ToursSection, BookingSection, FooterSection
  },
});
</script>

<style lang="scss" scoped>
.home {
  background-color: $color-grey-light-1;
  padding: 23rem 4rem 4rem 4rem;
  margin-top: -20vh;
}
</style>