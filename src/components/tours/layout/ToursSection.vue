/**
@author arthurmita
created 16/10/2020 at 17:22
**/
<template>
  <section class="section-tours">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">
        Most Popular Tours
      </h2>
    </div>

    <div class="u-margin-bottom-huge">
      <div class="row">
        <div v-for="card in cards" :key="card.cardType" class="col-1-of-3">
          <tour-card :card="card"></tour-card>
        </div>
      </div>
    </div>

    <div class="u-center-text">
      <base-button is-link to="/" type="btn-green">Discover More Tours</base-button>
    </div>
  </section>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import TourCard, {Card} from '@/components/tours/cards/TourCard.vue';
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

export default defineComponent({
  name: 'HomeToursSection',
  components: {
    TourCard, BaseButton,
  },
  setup() {
    const cards: Array<Card> = [
      {
        cardType: 1,
        front: {
          title: 'The Sea Explorer',
          items: [
            '3 day tour',
            'Up to 30 People',
            '2 tour guides',
            'Sleep in cozy hotels',
            'Difficulty: Easy',
          ],
        },
        back: {
          price: 279,
        },
      },
      {
        cardType: 2,
        front: {
          title: 'The Forest Hiker',
          items: [
            '7 day tour',
            'Up to 40 People',
            '6 tour guides',
            'Sleep in provided tents',
            'Difficulty: Medium',
          ],
        },
        back: {
          price: 479,
        },
      },
      {
        cardType: 3,
        front: {
          title: 'The snow adventurer',
          items: [
            '5 day tour',
            'Up to 15 People',
            '3 tour guides',
            'Sleep in provided tents',
            'Difficulty: Hard',
          ],
        },
        back: {
          price: 879,
        },
      },
    ];

    return {
      cards,
    };
  },
});
</script>

<style lang='scss' scoped>
.section-tours {
  background-color: $color-grey-light-1;
  padding: 15rem 0 10rem 0;
  margin-top: -10rem;
}
</style>