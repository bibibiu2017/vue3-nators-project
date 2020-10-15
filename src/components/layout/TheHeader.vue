<template>
  <header class="header">
    <div class="header__log-box">
      <img alt="Logo" class="header__logo" src="@/assets/img/logo-white.png"/>
    </div>

    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">Is Where Life happens</span>
      </h1>

      <base-button is-link title="Discover Our Tours"></base-button>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    BaseButton
  }
});
</script>

<style lang="scss" scoped>
.header {
  height: 95vh;
  position: relative;
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  background-image: linear-gradient(to right bottom,
      rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)),
  url(~@/assets/img/hero.jpg);

  &__log-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    height: 3.5rem;
  }

  /*
    top, left in relation to parent element
    transform in relation to element
  */
  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>
