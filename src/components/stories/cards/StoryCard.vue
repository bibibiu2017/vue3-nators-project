/**
@author arthurmita
created 17/10/2020 at 19:37
**/
<template>
  <div class="story u-margin-bottom-huge">
    <figure class="story__shape">
      <img :src="imageSrc" alt="Person" class="story__img">
      <figcaption class="story__caption">{{ story.caption }}</figcaption>
    </figure>
    <div class="story__text">
      <h3 class="heading-tertiary u-margin-bottom-small">{{ story.heading }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import {computed, defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'StoryCard',
  props: {
    story: {
      type: Object as PropType<Story>,
      required: true,
    },
  },
  setup(props) {
    const imageSrc = computed(() => require(`@/assets/img/${props.story.image}`));
    return {
      imageSrc,
    };
  },
});

export type Story = {
  image: string;
  caption: string;
  heading: string;
}
</script>

<style lang='scss' scoped>
.story {
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba($color-black, .1);
  background-color: rgba($color-white, .6);
  border-radius: 3px;
  padding: 6rem 6rem 6rem 9rem;
  font-size: $default-font-size;
  transform: skewX(-12deg);

  &__img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    transition: all .5s;
    //backface-visibility: hidden; //FIX: animation shaking glitch
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    font-size: 1.7rem;
    color: $color-white;
    opacity: 0;
    transform: translate(-50%, 0);
    transition: all .5s;
    backface-visibility: hidden; //FIX: animation shaking glitch
  }

  &:hover &__caption {
    color: $color-white;
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover &__img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }

  &__text {
    cursor: default;
    transform: skewX(12deg);
  }

  &__shape {
    position: relative;
    float: left;
    height: 15rem;
    width: 15rem;

    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
  }

  /*&__img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    transition: all .5s;
    //backface-visibility: hidden; //FIX: animation shaking glitch
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    font-size: 1.7rem;
    color: $color-white;
    opacity: 0;
    transform: translate(-50%, 0);
    transition: all .5s;
    backface-visibility: hidden; //FIX: animation shaking glitch
  }

  &:hover &__caption {
    color: $color-white;
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover &__img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }*/
}
</style>