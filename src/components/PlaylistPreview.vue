<!--It renders a preview of the album, picture and title -->
<template>
  <router-link tag="div" class="ma-3 playlist-preview-container" to="/station">
    <v-layout column>
      <img src="@/assets/images/daily-mix-1.jpg" alt="just a playlist"/>
      <h5 class="text-xs-center">Discover Now</h5>
    </v-layout>
  </router-link>
</template>

<style scoped lang="scss">
  .playlist-preview-container {
    max-width:300px;
    text-decoration:none;
    cursor:pointer;
  }
</style>
