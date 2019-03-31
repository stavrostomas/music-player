<template>
  <div class="station-container">
    <!-- Load the album section -->
    <loaded-playlist :content="songs" />
    <!-- Load the player controls -->
    <player-controls-bar />
  </div>
</template>

<script>
import LoadedPlaylist from "@/components/LoadedPlaylist.vue";
import PlayerControlsBar from "@/components/PlayerControlsBar.vue";

export default {
  name: "player",
  data: function() {
    return {
      songs: {
        song1: {
          title: "Legend",
          band: "The Score",
          duration: 600
        },
        song2: {
          title: "Best Of Me",
          band: "Neffex",
          duration: 600
        }
      }
    };
  },
  components: {
    LoadedPlaylist,
    PlayerControlsBar
  }
};
</script>

<style scoped lang="scss">
  .station-container {
    padding-bottom: 100px;
  }
</style>
