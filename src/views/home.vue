<template>
  <div>
    <v-tabs 
      class="mt-3" 
      color="transparent" 
      dark 
      centered 
      slider-color="#20D760">
      <v-tab>
        Featured
      </v-tab>

      <v-tab>
        New Releases
      </v-tab>

      <v-tab>
        Discover
      </v-tab>

      <v-tab-item class="ma-5">
        <h2>Made For You</h2>
        <v-layout row wrap>
          <playlist-preview />
          <playlist-preview />
          <playlist-preview />
        </v-layout>
      </v-tab-item>

      <v-tab-item class="ma-5">
        <h2>The best new releases</h2>
        <v-layout row wrap>
          <playlist-preview />
          <playlist-preview />
          <playlist-preview />
        </v-layout>
      </v-tab-item>

      <v-tab-item class="ma-5">
        <h2>Playlists Made just for you</h2>
        <v-layout row wrap>
          <playlist-preview />
          <playlist-preview />
          <playlist-preview />
        </v-layout>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import PlaylistPreview from "@/components/PlaylistPreview.vue";

export default {
  name: "home",
  components: {
    PlaylistPreview
  }
};
</script>

<style scoped lang="scss">
.v-tabs__div {
  cursor: pointer;
}
</style>
