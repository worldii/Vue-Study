<template>
  <div class="about">
    <h1>This is an about page</h1>
  <ul>
    <li> {{myJwtToken}}</li>
        <li> {{ currentPage }}</li>
<li>
  {{ tokenInfo }}
</li>
  <li><button @click="updateToken">update jwt token</button></li>
  <li><button @click="nextPage">next page</button></li>
  <li><button @click="pageTo({to : 10})">page to</button></li>
 
  <li><input type="text" v-model="targetDt" /><button @click="getMovieList(targetDt)">목록조회</button></li></ul>
  
  <h1>영화 목록</h1>
  <ul>
    <li v-for="(movie, index) in moveList" :key="index">{{ movie.rank }} - {{ movie.movieNm }}</li>
  </ul>

  </div>
</template>
<script>

import constants from '@/js/constants';
import { mapState , mapGetters , mapMutations, mapActions} from 'vuex';
export default {
  data() { 
    return {
      targetDt : "20230514"
    };
  }, 
  methods: {
    updateToken() {
      this.$store.commit(constants.SET_JWT_TOKEN, "새로운 토큰입니다");
    }
    ,
    ...mapMutations([
      constants.NEXT_PAGE, constants.PAGE_TO
    ])  
    , 
    // getMovieList() {
    //   this.$store.dispatch(constants.GET_MOVIE_LIST, { targetDt: this.targetDt });
    
    // }, 
  ...mapActions([
    constants.GET_MOVIE_LIST
  ])
  
  },
  // readonly 의 영역 
  computed: { 
    // jwtToken: function () {
    //   return this.$store.state.jwtToken;
    // },
    ...mapState({
      myJwtToken: "jwtToken",
      currentPage: "currentPage", 
      moveList: "moveList"
    }),
    ...mapGetters([
      'tokenInfo',
    ])
  } 
  , 
  
};
</script>