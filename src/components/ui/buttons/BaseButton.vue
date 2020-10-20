/**
@author arthurmita
created 16/10/2020 at 00:33
**/

<template>
  <router-link v-if="isLink" :class="computedClass" :to="to">
    <slot></slot>
  </router-link>
  <button v-else :class="computedClass" @click="buttonClicked">
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import * as Vue from 'vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    isLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
    type: {
      type: String as Vue.PropType<'btn-white' | 'btn-green' | 'btn-text-green'>,
      required: false,
      default: 'btn-white',
    },
    animated: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['btn-clicked'],

  setup(props, {emit}) {
    const buttonClicked = () => {
      emit('btn-clicked');
    };
    const buttonType = Vue.toRef(props, 'type');
    const animated = Vue.toRef(props, 'animated');

    const computedClass = Vue.computed(() => {
      let buttonClass: string;

      switch (buttonType.value) {
        case 'btn-white':
          buttonClass = 'btn btn--white';
          break;
        case 'btn-green':
          buttonClass = 'btn btn--green';
          break;
        case 'btn-text-green':
          buttonClass = 'btn-text btn-text--green';
          break;
      }

      if (animated.value)
        buttonClass += ` btn--animated`;

      return buttonClass;
    });
    return {
      buttonClicked, computedClass,
    };
  },
});
</script>