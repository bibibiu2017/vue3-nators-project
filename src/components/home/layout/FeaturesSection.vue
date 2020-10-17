/**
@author arthurmita
created 16/10/2020 at 13:09
**/
<template>
  <section class="features">
    <div class="row">
      <div class="col-1-of-4">
        <feature-card icon="basic-world" title="Explore The World">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        </feature-card>
      </div>
      <div class="col-1-of-4">
        <feature-card icon="basic-compass" title="Meet Nature">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        </feature-card>
      </div>
      <div class="col-1-of-4">
        <feature-card icon="basic-map" title="Find Your Way">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        </feature-card>
      </div>
      <div class="col-1-of-4">
        <feature-card icon="basic-heart" title="Live a Healthier Life">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        </feature-card>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import FeatureCard from '@/components/home/cards/FeatureCard.vue';

export default defineComponent({
  name: 'HomeFeaturesSection',
  components: {
    FeatureCard
  }
});
</script>

<style lang='scss' scoped>
.features {
  padding: 20rem 5rem;
  background-size: cover;
  @include backgroundImage('nat-4.jpg');
  transform: skewY(-7deg);
  margin-top: -10rem;

  //Select Direct Child
  & > * {
    transform: skewY(7deg);
  }
}

</style>