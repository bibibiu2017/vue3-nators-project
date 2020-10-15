<template>
<the-header></the-header>
</template>

<script lang="ts">
import TheHeader from "@/components/layout/TheHeader.vue";
import {
  defineComponent
} from "vue";

export default defineComponent({
  name: "Home",
  components: {
    TheHeader,
  },
});
</script>
