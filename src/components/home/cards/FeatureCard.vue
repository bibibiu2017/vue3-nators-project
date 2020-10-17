/**
@author arthurmita
created 16/10/2020 at 13:51
**/
<template>
  <div class="feature-card">
    <header>
      <i :class="['feature-card__icon',computedIcon]"></i>
      <h3 class="heading-tertiary u-margin-bottom-small">{{ title }}</h3>
    </header>
    <div>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import * as Vue from 'vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FeatureCard',
  components: {},
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {

    const iconName = Vue.toRef(props, 'icon');
    const computedIcon = Vue.computed(() => {
      return `icon-${iconName.value}`;
    });
    return {
      computedIcon,
    };
  },
});
</script>

<style lang='scss' scoped>
.feature-card {
  text-align: center;
  border-radius: 3px;
  background-color: rgba($color-white, .8);
  transition: all .3s ease-out;
  padding: 3rem;

  * {
    cursor: default;
  }

  &:hover {
    box-shadow: 0 2rem 5rem rgba($color-black, .25);
    transform: translateY(-1.5rem) scale(1.04);
  }

  &:active {
    transform: translateY(-.5rem) scale(1.01);
    box-shadow: 0 1.5rem 4.5rem rgba($color-black, .15);
  }

  &__icon {
    font-size: 6rem;
    margin-bottom: .5rem;
    color: transparent;
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
  }
}
</style>