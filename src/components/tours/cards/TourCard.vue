/**
@author arthurmita
created 16/10/2020 at 18:14
**/
<template>
  <div class="card">
    <div class="card__side card__side--front">
      <header class="card__header">
        <div :class="`card__header__picture card__header__picture--${card.cardType}`">&nbsp;</div>
        <h4 class="card__header__heading">
          <span :class="`card__header__heading-span card__header__heading-span--${card.cardType}`">
            {{ card.front.title }}
          </span>
        </h4>
      </header>
      <div class="card__body">
        <ul>
          <li v-for="item in card.front.items" :key="item"> {{ item }}</li>
        </ul>
      </div>
    </div>
    <div :class="`card__side card__side--back card__side--back--${card.cardType}`">
      <div class="card__cta">
        <div class="card__price-box">
          <p class="card__price-only">Only</p>
          <p class="card__price-value">${{ card.back.price }}</p>
        </div>
        <base-button is-link to="/book">Book Now</base-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, PropType} from 'vue';
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

export default defineComponent({
  name: 'TourCard',
  components: {
    BaseButton,
  },
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
});

export type Card = {
  cardType: number;
  front: {
    title: string;
    items: Array<string>;
  };
  back: {
    price: number;
  };
}
</script>

<style lang='scss' scoped>
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;

  &__side {
    top: 0;
    left: 0;
    width: 100%;
    height: 52rem;
    position: absolute;
    transition: all .8s ease;
    backface-visibility: hidden; //ONLY SHOW ONE SIDE ON ROTATION
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

    &--front {
    }

    &--back {
      transform: rotateY(180deg);

      &--1 {
        background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark);
      }

      &--2 {
        background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
      }

      &--3 {
        background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark);
      }
    }

  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0deg);
  }

  //FRONT SIDE STYLE
  &__header {
    &__picture {
      height: 23rem;
      background-size: cover;
      background-blend-mode: screen;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

      &--1 {
        background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark),
        url('~@/assets/img/nat-5.jpg');
      }

      &--2 {
        background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark),
        url('~@/assets/img/nat-6.jpg');
      }

      &--3 {
        background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark),
        url('~@/assets/img/nat-7.jpg');
      }
    }

    &__heading {
      font-size: 2.5rem;
      font-weight: 300;
      text-align: right;
      color: $color-white;
      text-transform: uppercase;

      position: absolute;
      top: 12rem;
      right: 3rem;
      width: 70%;
    }

    &__heading-span {
      padding: 1rem 1.5rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;

      &--1 {
        background-image: linear-gradient(to right bottom, rgba($color-secondary-light, .85), rgba($color-secondary-dark, .85)),
      }

      &--2 {
        background-image: linear-gradient(to right bottom, rgba($color-primary-light, .85), rgba($color-primary-dark, .85)),
      }

      &--3 {
        background-image: linear-gradient(to right bottom, rgba($color-tertiary-light, .85), rgba($color-tertiary-dark, .85)),
      }
    }
  }

  &__body {
    padding: 3rem;

    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto; //CENTERING BLOCK ELEMENT INSIDE BLOCK ELEMENT

      li {
        margin: 0 auto; //CENTERING BLOCK ELEMENT INSIDE BLOCK ELEMENT
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid $color-grey-light-2;
        }
      }
    }
  }

  //BACK SIDE STYLE
  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  &__price-box {
    margin-bottom: 8rem;
    color: $color-white;
  }

  &__price-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__price-value {
    font-size: 5rem;
    font-weight: 100;
  }
}
</style>