/**
@author arthurmita
created 20/10/2020 at 07:29
**/
<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <img alt="Full Logo" class="footer__logo" src="@/assets/img/logo-green-2x.png">
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <router-link class="footer__link" to="/">Company</router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" to="/">Contact Us</router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" to="/">Careers</router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" to="/">Privacy</router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" to="/">Terms</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright">
          Built by
          <router-link class="footer__link" target="_blank" to="/profile">Arthur Mita</router-link>
          with help from Jonas Schmedtmann's online course
          <router-link class="footer__link" target="_blank" to="/course">Advances CSS and Sass</router-link>
          .
          Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this web page for both personal and
          commercial use but NOT to claim it as your own design. A credit to the original author is highly
          appreciated!
          You can find the source code
          <router-link class="footer__link" target="_blank" to="/git">here</router-link>
          .
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FooterSection',
});
</script>

<style lang='scss' scoped>
.footer {
  padding: 10rem;
  font-size: 1.4rem;
  background-color: $color-grey-dark-3;
  color: $color-grey-light-1;

  &__logo-box {
    text-align: center;
    margin-bottom: 8rem;
  }

  &__navigation {
    border-top: 1px solid $color-grey-dark;
    padding-top: 2rem;
    display: inline-block;
  }

  &__logo {
    width: 15rem;
    height: auto;
  }

  &__list {
    list-style: none;
  }

  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &__link {
    &:link,
    &:visited {
      color: $color-grey-light-1;
      background-color: $color-grey-dark-3;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .2s;
      display: inline-block;
    }

    &:hover,
    &:active {
      color: $color-primary;
      box-shadow: 0 2rem 4rem rgba($color-black, .5);
      transform: rotate(3deg) scale(1.3);
    }
  }

  &__copyright {
    border-top: 1px solid $color-grey-dark;
    padding-top: 2rem;
    width: 85%;
    float: right;
  }
}
</style>