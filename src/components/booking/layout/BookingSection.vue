/**
@author arthurmita
created 17/10/2020 at 23:00
**/
<template>
  <div class="booking">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form class="form" @submit.prevent="submitForm">

            <div class="u-margin-bottom-small">
              <h2 class="heading-secondary">Start booking now</h2>
            </div>

            <div class="form__group">
              <input id="name" class="form__input" placeholder="Full Name" required type="text">
              <label class="form__label" for="name">Full Name</label>
            </div>

            <div class="form__group">
              <input id="email" class="form__input" placeholder="Email Address" required type="email">
              <label class="form__label" for="email">Email Address</label>
            </div>

            <div class="form__radio-group">
              <input id="small" class="form__radio-input" name="size" type="radio">
              <label class="form__radio-label" for="small">
                <span class="form__radio-button"></span>
                Small tour group
              </label>
            </div>

            <div class="form__radio-group u-margin-bottom-medium">
              <input id="large" class="form__radio-input" name="size" type="radio">
              <label class="form__radio-label" for="large">
                <span class="form__radio-button"></span>
                Large tour group
              </label>
            </div>

            <div class="form__group">
              <base-button type="btn-green">Next step   &rarr;</base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import {useRouter} from 'vue-router';
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

export default defineComponent({
  name: 'BookingSection',
  components: {
    BaseButton,
  },
  setup() {
    const router = useRouter();
    const submitForm = () => {
      router.replace('/');
    };

    return {
      submitForm,
    };
  },
});
</script>

<style lang='scss' scoped>
.booking {
  height: 100%;
  padding: 21rem;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
}

.book {
  background-image: linear-gradient(105deg,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 50%,
      transparent 50%),
  url("~@/assets/img/nat-10.jpg");
  height: 50rem;
  border-radius: 3px;
  background-size: cover;
  box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

  &__form {
    width: 50%;
    padding: 6rem;
  }
}
</style>