/**
@author arthurmita
created 16/10/2020 at 11:21
**/

<template>
  <section class="about">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">
        Exiting Tours For Adventurous People
      </h2>
    </div>

    <div class="row">
      <div class="col-1-of-2">
        <h3 class="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur, culpa cumque dolores doloribus, esse
          fugit id magnam maxime modi molestiae!
        </p>

        <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like you have never lived before</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto culpa deserunt dolor est,
          exercitationem fugit iure minus molestias nobis?
        </p>

        <base-button is-link to="/tours" type="btn-text-green">Learn More &rarr;</base-button>
      </div>
      <div class="col-1-of-2">
        <div class="composition">
          <img alt="Photo1" class="composition__photo composition__photo--p1" src="@/assets/img/nat-1-large.jpg">
          <img alt="Photo2" class="composition__photo composition__photo--p2" src="@/assets/img/nat-2-large.jpg">
          <img alt="Photo3" class="composition__photo composition__photo--p3" src="@/assets/img/nat-3-large.jpg">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

export default defineComponent({
  name: 'HomeAboutSection',
  components: {
    BaseButton
  }
});
</script>

<style lang='scss' scoped>
.about {
  background-color: $color-grey-light-1;
  padding: 25rem 0;
  margin-top: -20vh;
}

.composition {
  position: relative;

  &__photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .4);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all .1s;
    outline-offset: 2rem;

    &:hover {
      outline: 1.5rem solid $color-primary;
      z-index: 20;
      transform: scale(1.05) translateY(-.5rem);
      box-shadow: 0 2rem 4rem rgba($color-black, .5);
    }

    &--p1 {
      left: 0;
      top: -2rem;
    }

    &--p2 {
      right: 0;
      top: 2rem;
    }

    &--p3 {
      left: 20%;
      top: 10rem;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(.95);
  }
}
</style>