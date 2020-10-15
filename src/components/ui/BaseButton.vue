/**
@author arthurmita
created 16/10/2020 at 00:33
**/

<template>
  <router-link v-if="isLink" :to="to" class="btn btn--white btn--animated">{{ title }}</router-link>
  <button v-else @click="buttonClicked">{{ title }}</button>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    isLink: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    title: {
      type: String,
      required: true
    }
  },
  emits: ['btn-clicked'],

  setup(props, {emit}) {
    const buttonClicked = () => {
      emit('btn-clicked');
    };

    return {
      buttonClicked
    };
  }
});
</script>

<style lang="scss" scoped>
.btn {

  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 30rem;
    transition: all 0.2s;
    position: relative;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba($color-black, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    //box-shadow: 0 1rem 2rem;
    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
  }

  &--white {
    background-color: $color-white;
    color: $color-grey-dark;

    &::after {
      background-color: $color-white;
      transition: all 0.4s;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &--animated {
    animation: moveInButton 1s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}
</style>