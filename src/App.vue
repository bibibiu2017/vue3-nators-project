<template>
  <router-view/>
</template>

<style lang="scss">
@import "assets/css/icon-font.css";

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

#app {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: $color-grey-dark;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
}

</style>
