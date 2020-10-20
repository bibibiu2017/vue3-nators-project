/**
@author arthurmita
created 18/10/2020 at 02:10
**/
<template>
  <div class="book">
    <booking-section></booking-section>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import BookingSection from '@/components/booking/layout/BookingSection.vue';

export default defineComponent({
  name: 'Book',
  components: {
    BookingSection,
  },
});
</script>

<style lang='scss' scoped>
.book {
  padding: 0;
}
</style>