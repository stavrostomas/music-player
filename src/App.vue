<template>
  <div id="app">
    <app-nav />
    <router-view />
    <player-controls-bar />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import PlayerControlsBar from "@/components/PlayerControlsBar.vue";

export default {
  components: {
    AppNav,
    PlayerControlsBar
  }
};
</script>

<style lang="scss">
  @import "assets/styles/global";
</style>



