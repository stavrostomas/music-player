import Vue from "vue";
import Vuex from "vuex";
import playlist from './data/playlist.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlist,
    selectedAlbumName: playlist["1"]["title"],
    selectedSong: playlist["1"]["songs"]["2"],
    currentSongIndex: null,
    songIsPlaying:false,
    songProgressInSeconds: 0,
    timer: null
  },
  getters: {
    selectedAlbumName(state) {
      return state.selectedAlbumName
    },
    selectedSongName(state) {
      return state.selectedSong.title
    },
    selectedSongArtist(state) {
      return state.selectedSong.artist
    },
    songPlayingProgressInSeconds(state) {
      return state.songProgressInSeconds
    },
    songPlayingProgressInMinutes(state) {
      let currentProgress = state.songProgressInSeconds
      let currentProgressInMunutes;
      let minutes = Math.floor( currentProgress / 60);
      let seconds = currentProgress - minutes * 60
      if ( seconds < 10) {
        seconds = "0" + seconds 
      }
      currentProgressInMunutes = minutes + ":" + seconds
      return currentProgressInMunutes
    },
    selectedSongDurationInMinutes(state) {
      let duration = state.selectedSong.duration
      let minutes = Math.floor( duration / 60);
      let seconds = duration - minutes * 60
      if ( seconds.toString().length == 0) {
        seconds += seconds + "0"
      } else if (seconds.toString().length == 1) {
        seconds = "00"
      }
      return minutes + ":" + seconds
    },
    songIsPlaying(state){
      return state.songIsPlaying
    }
  },
  mutations: {
    playSongFromList(state, payload) {
      // If clicked song is not the same as currenty selected song play the song
      if( !(payload[1] == state.currentSongIndex)) {
        state.selectedSong = payload[0]
        state.songProgressInSeconds = 0
        state.currentSongIndex = payload[1]
      }
    },
    //Play the selected song
    play(state){
      state.songIsPlaying = true
      state.timer = setInterval( function () {
        state.songProgressInSeconds++
        // If timer passes ther duration of the song then jumb to next song
        if(state.songProgressInSeconds >= state.selectedSong.duration) {
          if(state.currentSongIndex < Object.keys(state.playlist["1"]["songs"]).length) {
            state.currentSongIndex++
            state.selectedSong = state.playlist["1"]["songs"][state.currentSongIndex]
            state.songProgressInSeconds = 0
          } else {
            // If we arrive to end of the list then stop timer, clearprogress and pause the player
            clearInterval(state.timer)
            state.songProgressInSeconds = 0
            state.songIsPlaying = false
          }
        }
      }, 1000)
    },
    //Pause the selected song
    pause(state){
      state.songIsPlaying = false
      clearInterval(state.timer);
    },
    previousSong(state) {
      // Unless you are at the first song jump one back and reset timer
      if(state.currentSongIndex > 1) {
        state.currentSongIndex--
        state.selectedSong = state.playlist["1"]["songs"][state.currentSongIndex]
        state.songProgressInSeconds = 0
      }
    },
    nextSong(state) {
      // Unless you are at the last song jump one ahead and reset timer
      if (state.currentSongIndex < Object.keys(state.playlist["1"]["songs"]).length) {
        state.currentSongIndex++;
        state.selectedSong =
          state.playlist["1"]["songs"][state.currentSongIndex];
        state.songProgressInSeconds = 0;
      }
    }
  }
});
