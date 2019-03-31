<!-- Renders an individual song inside the loaded playlist component-->
<template>
  <v-layout 
    row 
    pt-3 
    pb-3 
    ma-2 
    :class="[songIndex == this.$store.state.currentSongIndex ? 'selected' : '', 'song-container' ]"
    @click="playSongFromList([song,songIndex]);play()" 
    @mouseover="hovering = true"
    @mouseout="hovering = false">
    <v-flex xs10 pl-4>
      <v-icon small dark>{{ !hovering ? "album" : "play_arrow" }}</v-icon> <span class="ml-4">{{song.title}}</span>
    </v-flex>

    <v-flex xs2 text-xs-right mr-4>
      {{minutes}}:{{seconds}}
    </v-flex>
  </v-layout>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "Song",
  data() {
    return {
      hovering: false
    }
  },
  props: {
    song:{
      type: Object,
      required: true
    },
    songIndex:{
      type: String,
      required: true
    }
  },
  computed: {
    minutes() {
      return Math.floor(this.song.duration / 60);
    },
    seconds() {
      let n = this.song.duration - this.minutes * 60
      if ( n.toString().length == 1) {
        return n + "0"
      } else {
        return n
      }
    }
  },
  methods:{
    ...mapMutations([
      'playSongFromList',
      'play'
    ])
  }
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/_vars.scss';
  .v-icon {
    position:relative;
    top:-2px;
  }

  .song-container {
    transition: background-color 0.1s ease-out;
    &:hover {
      background: map-get($colors, black);
      cursor: pointer;
    }
  }
  .selected{
    background:map-get($colors,green);
  }
</style>
