/**
@author arthurmita
created 17/10/2020 at 17:41
**/
<template>
  <section class="stories">

    <background-video></background-video>

    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">We make people genuinely happy</h2>
    </div>

    <div class="row">
      <story-card v-for="story in stories" :key="story.image" :story="story">
        <template v-slot:default>
          {{ story.review }}
        </template>
      </story-card>

      <div class="u-center-text">
        <base-button is-link type="btn-text-green">More stories &rarr;</base-button>
      </div>

    </div>
  </section>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import StoryCard, {Story} from '@/components/stories/cards/StoryCard.vue';
import BaseButton from '@/components/ui/buttons/BaseButton.vue';
import BackgroundVideo from '@/components/ui/background/BackgroundVideo.vue';

export default defineComponent({
  name: 'StoriesSection',
  components: {
    StoryCard, BaseButton, BackgroundVideo
  },
  setup() {

    const stories: Array<Story & { review: string }> = [
      {
        heading: 'I had the best week with my family',
        caption: 'Mary Smith',
        image: 'nat-8.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perferendis quis similique veniam.\n' +
            'Aliquam aperiam fuga illo porro qui sunt tempora? Aperiam doloremque eius non omnis perspiciatis rem sed,\n' +
            'similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dicta earum error !?',

      },
      {
        heading: 'Wow! My life is completely different now',
        caption: 'Jack Wilson',
        image: 'nat-9.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perferendis quis similique veniam.\n' +
            'Aliquam aperiam fuga illo porro qui sunt tempora? Aperiam doloremque eius non omnis perspiciatis rem sed,\n' +
            'similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dicta earum error !?',

      },
    ];

    return {
      stories,
    };
  },
});
</script>

<style lang='scss' scoped>
.stories {
  position: relative;
  padding: 10rem 0;
}
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .15;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
}
</style>