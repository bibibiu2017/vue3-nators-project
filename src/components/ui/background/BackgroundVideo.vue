/**
@author arthurmita
created 17/10/2020 at 22:46
**/
<template>
  <div class="bg-video">
    <video autoplay class="bg-video__content" loop muted>
      <source src="@/assets/img/video.mp4" type="video/mp4">
      <source src="@/assets/img/video.webm" type="video/webm">
      Your browser is not supported
    </video>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BackgroundVideo',
});
</script>

<style lang='scss' scoped>
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