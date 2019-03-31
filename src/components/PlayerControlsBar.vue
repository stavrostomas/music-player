<!-- Player Controls Bar-->
<template>
  <v-layout row wrap pa-4 class="controls-container">
    <!-- Current Song -->
    <v-flex xs12 md3>
      <v-layout column justify-center fill-height>
        <div class="ma-2">
          <div class="title mb-2">{{ selectedSongName() }}</div>
          <div class="subheading">{{ selectedSongArtist() }}</div>
        </div>
      </v-layout>
    </v-flex>

    <!-- Player Actions -->
    <v-flex xs12 md6 class="text-xs-center">
      <v-layout row justify-center align-center>
        <!-- Previous Button -->
        <v-icon dark @click="previousSong">skip_previous</v-icon>
        <!-- Play / Pause buttons -->
        <template>
          <div class="play-button">
            <v-icon v-if="songIsPlaying()" dark large @click="pause()">
              pause
            </v-icon>
            <v-icon v-else dark large @click="play()">play_arrow</v-icon>
          </div>
        </template>
        <!--Next Button -->
        <v-icon dark @click="nextSong">skip_next</v-icon>
      </v-layout>
      <!-- Progress Bar -->
      <v-layout row align-center>
        <span>{{ songPlayingProgressInMinutes() }}</span>
        <v-progress-linear
          class="ma-3"
          :value="songProgress"
          height="3"
          color="white"
        />
        <span>{{ selectedSongDurationInMinutes() }}</span>
      </v-layout>
    </v-flex>

    <!-- Volume -->
    <v-flex xs12 md1></v-flex>
    <v-flex xs12 md2 fill-height class="text-xs-center volume">
      <v-layout column align-center justify-center fill-height>
        <v-icon dark class="mb-1">speaker</v-icon>
        <v-progress-linear class="ma-3" value="15" height="3" color="white" />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "PlayerControls",
  methods: {
    ...mapGetters([
      "selectedSongArtist",
      "selectedSongName",
      "songPlayingProgressInSeconds",
      "songPlayingProgressInMinutes",
      "selectedSongDurationInMinutes",
      "songIsPlaying"
    ]),
    ...mapMutations(["play", "pause", "previousSong", "nextSong"])
  },
  computed: {
    songProgress() {
      // Calculate the progress bar
      let percentage;
      let secondsPassed;
      if (this.$store.state.selectedSong) {
        percentage = this.$store.state.selectedSong.duration / 100;
        secondsPassed = this.$store.state.songProgressInSeconds;
      }
      return secondsPassed / percentage;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.controls-container {
  position: fixed;
  width: 100%;
  bottom: 0;
  background: map-get($colors, gray);
  .play-button {
    margin: 0px 20px;
    transition: all 0.3s ease-out;
    &:hover {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: map-get($brk, m0)) {
    text-align: center !important;
    .flex {
      margin-bottom: 10px;
    }
    .volume {
      margin: 0px auto;
      max-width: 160px;
    }
  }
  @media screen and (min-width: map-get($brk, m0)) {
    height: 120px;
  }
}
</style>
