<!--Navigation elements go in this component -->
<template>
  <div>
    <router-link class="home-icon" tag="div" to="/">
      <v-icon dark large >home</v-icon>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.home-icon {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: map-get($colors, gray);
  position: fixed;
  left: -120px;
  top: -120px;
  z-index: 10;
  i {
    position: absolute;
    bottom: 35px;
    right: 35px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
