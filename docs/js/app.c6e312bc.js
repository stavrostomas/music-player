(function(t){function e(e){for(var s,a,i=e[0],l=e[1],c=e[2],g=0,d=[];g<i.length;g++)a=i[g],r[a]&&d.push(r[a][0]),r[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},o=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00d6":function(t,e,n){},"034b":function(t){t.exports={1:{title:"Awesome Mix Vol 1",author:"Stavros Tomas",year:2019,image:"awesome-mix-vol-1",songs:{1:{title:"Some Nights",artist:"Imagine Dragons",duration:10},2:{title:"We are young",artist:"Mark Ronson",duration:12},3:{title:"Carry On",artist:"Avicci",duration:334},4:{title:"It Gets Better",artist:"One Republic",duration:60},5:{title:"Why Am I the One",artist:"John Newman",duration:243},6:{title:"All Alone",artist:"Rag n' Bone Man",duration:340},7:{title:"One Foot",artist:"Sia",duration:500},8:{title:"Stars",artist:"Twenty One Pilots",duration:100},9:{title:"Out of the town",artist:"Sia",duration:320},10:{title:"Legendary",artist:"Avicci",duration:640},11:{title:"Human",artist:"Imagine Dragons",duration:530},12:{title:"Sanctuary",artist:"One Republic",duration:280},13:{title:"Don't you worry child",artist:"Rag n' Bone Man",duration:10},14:{title:"Waiting for Love",artist:"Imagine Dragons",duration:12}}}}},"382e":function(t,e,n){"use strict";var s=n("945d"),r=n.n(s);r.a},"3aed":function(t,e,n){},"3ed4":function(t,e,n){},"53c3":function(t,e,n){"use strict";var s=n("57b9"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=n("ce5b"),o=n.n(r),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-nav"),n("router-view"),n("player-controls-bar")],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"home-icon",attrs:{tag:"div",to:"/"}},[n("v-icon",{attrs:{dark:"",large:""}},[t._v("home")])],1)],1)},c=[],u=(n("936e"),n("2877")),g={},d=Object(u["a"])(g,l,c,!1,null,"3a8df517",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"controls-container",attrs:{row:"",wrap:"","pa-4":""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-layout",{attrs:{column:"","justify-center":"","fill-height":""}},[n("div",{staticClass:"ma-2"},[n("div",{staticClass:"title mb-2"},[t._v(t._s(t.selectedSongName()))]),n("div",{staticClass:"subheading"},[t._v(t._s(t.selectedSongArtist()))])])])],1),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",md6:""}},[n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-icon",{attrs:{dark:""},on:{click:t.previousSong}},[t._v("skip_previous")]),[n("div",{staticClass:"play-button"},[t.songIsPlaying()?n("v-icon",{attrs:{dark:"",large:""},on:{click:function(e){return t.pause()}}},[t._v("\n            pause\n          ")]):n("v-icon",{attrs:{dark:"",large:""},on:{click:function(e){return t.play()}}},[t._v("play_arrow")])],1)],n("v-icon",{attrs:{dark:""},on:{click:t.nextSong}},[t._v("skip_next")])],2),n("v-layout",{attrs:{row:"","align-center":""}},[n("span",[t._v(t._s(t.songPlayingProgressInMinutes()))]),n("v-progress-linear",{staticClass:"ma-3",attrs:{value:t.songProgress,height:"3",color:"white"}}),n("span",[t._v(t._s(t.selectedSongDurationInMinutes()))])],1)],1),n("v-flex",{attrs:{xs12:"",md1:""}}),n("v-flex",{staticClass:"text-xs-center volume",attrs:{xs12:"",md2:"","fill-height":""}},[n("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[n("v-icon",{staticClass:"mb-1",attrs:{dark:""}},[t._v("speaker")]),n("v-progress-linear",{staticClass:"ma-3",attrs:{value:"15",height:"3",color:"white"}})],1)],1)],1)},f=[],m=n("cebc"),y=n("2f62"),b={name:"PlayerControls",methods:Object(m["a"])({},Object(y["b"])(["selectedSongArtist","selectedSongName","songPlayingProgressInSeconds","songPlayingProgressInMinutes","selectedSongDurationInMinutes","songIsPlaying"]),Object(y["c"])(["play","pause","previousSong","nextSong"])),computed:{songProgress:function(){var t,e;return this.$store.state.selectedSong&&(t=this.$store.state.selectedSong.duration/100,e=this.$store.state.songProgressInSeconds),e/t}}},h=b,S=(n("53c3"),Object(u["a"])(h,v,f,!1,null,"19c55862",null)),x=S.exports,_={components:{AppNav:p,PlayerControlsBar:x}},I=_,w=(n("5c0b"),Object(u["a"])(I,a,i,!1,null,null,null)),P=w.exports,O=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"station-container"},[n("loaded-playlist",{attrs:{content:t.songs}}),n("player-controls-bar")],1)},C=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"loaded-playlist",attrs:{row:"",wrap:"","mt-5":""}},[s("v-flex",{staticClass:"album-info",attrs:{"text-xs-center":"",xs12:"",sm6:""}},[s("img",{staticClass:"mt-3",attrs:{src:n("976d"),alt:"just a playlist"}}),s("h4",[t._v(t._s(t.selectedAlbum.title))]),s("p",[t._v(t._s(t.selectedAlbum.author))]),s("div",[t._v(t._s(t.selectedAlbum.year)+" - "+t._s(Object.keys(t.selectedAlbum.songs).length)+" songs")])]),s("v-flex",{staticClass:"songs-list",attrs:{xs12:"",sm6:""}},t._l(t.selectedAlbum.songs,function(t,e){return s("single-song",{key:t.id,attrs:{song:t,songIndex:e}})}),1)],1)},M=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{class:[t.songIndex==this.$store.state.currentSongIndex?"selected":"","song-container"],attrs:{row:"","pt-3":"","pb-3":"","ma-2":""},on:{click:function(e){t.playSongFromList([t.song,t.songIndex]),t.play()},mouseover:function(e){t.hovering=!0},mouseout:function(e){t.hovering=!1}}},[n("v-flex",{attrs:{xs10:"","pl-4":""}},[n("v-icon",{attrs:{small:"",dark:""}},[t._v(t._s(t.hovering?"play_arrow":"album"))]),n("span",{staticClass:"ml-4"},[t._v(t._s(t.song.title))])],1),n("v-flex",{attrs:{xs2:"","text-xs-right":"","mr-4":""}},[t._v("\n    "+t._s(t.minutes)+":"+t._s(t.seconds)+"\n  ")])],1)},$=[],N=(n("6b54"),{name:"Song",data:function(){return{hovering:!1}},props:{song:{type:Object,required:!0},songIndex:{type:String,required:!0}},computed:{minutes:function(){return Math.floor(this.song.duration/60)},seconds:function(){var t=this.song.duration-60*this.minutes;return 1==t.toString().length?t+"0":t}},methods:Object(m["a"])({},Object(y["c"])(["playSongFromList","play"]))}),D=N,E=(n("382e"),Object(u["a"])(D,A,$,!1,null,"a04d2e70",null)),L=E.exports,T={computed:{selectedAlbum:function(){return this.$store.state.playlist[1]}},components:{SingleSong:L}},B=T,F=(n("a2b4"),Object(u["a"])(B,k,M,!1,null,null,null)),R=F.exports,J={name:"player",data:function(){return{songs:{song1:{title:"Legend",band:"The Score",duration:600},song2:{title:"Best Of Me",band:"Neffex",duration:600}}}},components:{LoadedPlaylist:R,PlayerControlsBar:x}},W=J,q=(n("e8f5"),Object(u["a"])(W,j,C,!1,null,"14699665",null)),G=q.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tabs",{staticClass:"mt-3",attrs:{color:"transparent",dark:"",centered:"","slider-color":"#20D760"}},[n("v-tab",[t._v("\n      Featured\n    ")]),n("v-tab",[t._v("\n      New Releases\n    ")]),n("v-tab",[t._v("\n      Discover\n    ")]),n("v-tab-item",{staticClass:"ma-5"},[n("h2",[t._v("Made For You")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("playlist-preview"),n("playlist-preview"),n("playlist-preview")],1)],1),n("v-tab-item",{staticClass:"ma-5"},[n("h2",[t._v("The best new releases")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("playlist-preview"),n("playlist-preview"),n("playlist-preview")],1)],1),n("v-tab-item",{staticClass:"ma-5"},[n("h2",[t._v("Playlists Made just for you")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("playlist-preview"),n("playlist-preview"),n("playlist-preview")],1)],1)],1)],1)},V=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"ma-3 playlist-preview-container",attrs:{tag:"div",to:"/station"}},[s("v-layout",{attrs:{column:""}},[s("img",{attrs:{src:n("976d"),alt:"just a playlist"}}),s("h5",{staticClass:"text-xs-center"},[t._v("Discover Now")])])],1)},z=[],K=(n("88c1"),{}),Q=Object(u["a"])(K,Y,z,!1,null,"22ab26f3",null),U=Q.exports,X={name:"home",components:{PlaylistPreview:U}},Z=X,tt=(n("7708"),Object(u["a"])(Z,H,V,!1,null,"864748fe",null)),et=tt.exports;s["default"].use(O["a"]);var nt=new O["a"]({routes:[{path:"/",name:"home",component:et},{path:"/station",name:"station",component:G}]}),st=n("a4bb"),rt=n.n(st),ot=n("034b");s["default"].use(y["a"]);var at=new y["a"].Store({state:{playlist:ot,selectedAlbumName:ot["1"]["title"],selectedSong:ot["1"]["songs"]["2"],currentSongIndex:null,songIsPlaying:!1,songProgressInSeconds:0,timer:null},getters:{selectedAlbumName:function(t){return t.selectedAlbumName},selectedSongName:function(t){return t.selectedSong.title},selectedSongArtist:function(t){return t.selectedSong.artist},songPlayingProgressInSeconds:function(t){return t.songProgressInSeconds},songPlayingProgressInMinutes:function(t){var e,n=t.songProgressInSeconds,s=Math.floor(n/60),r=n-60*s;return r<10&&(r="0"+r),e=s+":"+r,e},selectedSongDurationInMinutes:function(t){var e=t.selectedSong.duration,n=Math.floor(e/60),s=e-60*n;return 0==s.toString().length?s+=s+"0":1==s.toString().length&&(s="00"),n+":"+s},songIsPlaying:function(t){return t.songIsPlaying}},mutations:{playSongFromList:function(t,e){e[1]!=t.currentSongIndex&&(t.selectedSong=e[0],t.songProgressInSeconds=0,t.currentSongIndex=e[1])},play:function(t){t.songIsPlaying=!0,t.timer=setInterval(function(){t.songProgressInSeconds++,t.songProgressInSeconds>=t.selectedSong.duration&&(t.currentSongIndex<rt()(t.playlist["1"]["songs"]).length?(t.currentSongIndex++,t.selectedSong=t.playlist["1"]["songs"][t.currentSongIndex],t.songProgressInSeconds=0):(clearInterval(t.timer),t.songProgressInSeconds=0,t.songIsPlaying=!1))},1e3)},pause:function(t){t.songIsPlaying=!1,clearInterval(t.timer)},previousSong:function(t){t.currentSongIndex>1&&(t.currentSongIndex--,t.selectedSong=t.playlist["1"]["songs"][t.currentSongIndex],t.songProgressInSeconds=0)},nextSong:function(t){t.currentSongIndex<rt()(t.playlist["1"]["songs"]).length&&(t.currentSongIndex++,t.selectedSong=t.playlist["1"]["songs"][t.currentSongIndex],t.songProgressInSeconds=0)}}});n("d1e7"),n("bf40");s["default"].config.productionTip=!1,s["default"].use(o.a),new s["default"]({router:nt,store:at,render:function(t){return t(P)}}).$mount("#app")},"57b9":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var s=n("5e27"),r=n.n(s);r.a},"5e27":function(t,e,n){},7708:function(t,e,n){"use strict";var s=n("3aed"),r=n.n(s);r.a},"88c1":function(t,e,n){"use strict";var s=n("3ed4"),r=n.n(s);r.a},"936e":function(t,e,n){"use strict";var s=n("00d6"),r=n.n(s);r.a},"945d":function(t,e,n){},"976d":function(t,e,n){t.exports=n.p+"img/daily-mix-1.ff28df0b.jpg"},"9bc0":function(t,e,n){},a03d:function(t,e,n){},a2b4:function(t,e,n){"use strict";var s=n("a03d"),r=n.n(s);r.a},e8f5:function(t,e,n){"use strict";var s=n("9bc0"),r=n.n(s);r.a}});
//# sourceMappingURL=app.c6e312bc.js.map