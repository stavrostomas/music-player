<!-- Shows the loaded album and songs list -->
<template>
    <v-layout row wrap mt-5 class="loaded-playlist">

      <!-- Load the Album Info -->
      <v-flex text-xs-center xs12 sm6 class="album-info">
        <img class="mt-3" src="@/assets/images/daily-mix-1.jpg" alt="just a playlist"/>
        <h4>{{selectedAlbum.title}}</h4>
        <p>{{selectedAlbum.author}}</p>
        <div>{{selectedAlbum.year}} - {{Object.keys(selectedAlbum.songs).length}} songs</div>

      </v-flex>

      <!-- Load the songs list -->
      <v-flex class="songs-list" xs12 sm6>
        <single-song v-for="(song, index ) in selectedAlbum.songs" :song="song" :songIndex="index" :key="song.id"/>
      </v-flex>

    </v-layout>

</template>

<script>
import SingleSong from "@/components/SingleSong.vue"

export default {
  computed:{
    selectedAlbum() {
      return this.$store.state.playlist[1];
    }
  },
  components: {
    SingleSong
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/_vars.scss';

  .loaded-playlist {
    margin: 20px auto;
  }
  .album-info{
    img{
      width:50%;
      max-width:300px;
    }
  }
</style>
