/**
@author arthurmita
created 17/10/2020 at 17:27
**/
<template>
  <tours-section></tours-section>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import ToursSection from '@/components/tours/layout/ToursSection.vue';

export default defineComponent({
  name: "Tours",
  components: {
    ToursSection
  }
})
</script>

<style lang='scss' scoped>

</style>