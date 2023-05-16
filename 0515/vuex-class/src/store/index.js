import Vue from 'vue'
import Vuex from 'vuex'
import constants from '@/js/constants'
Vue.use(Vuex)
import { createVuexPersistedState } from 'vue-persistedstate'
export default new Vuex.Store({
  // 상태 - read / write 
  state: {
    jwtToken: "jwtToken", 
    currentPage: 0,
    moveList : [],
  },
  // readOnly,  filter
  getters: {

    tokenInfo(state) {
      let token = state.jwtToken;
      return  `{${token}}(${token.length})`;
     },
  },
  // 상태에 대한 변경 - 빠릿 빠릿 동기 작업 처리 
  mutations: {

    // computed property name
    // payLoad : 순수한 데이터의 덩어리 
    [constants.SET_JWT_TOKEN]: function (state, payload) {
      state.jwtToken = payload;
    }, 
    [constants.NEXT_PAGE]: function (state) { 
      state.currentPage = state.currentPage + 1;
      // payload 는 필요할 때 받는다.
    },
    [constants.PAGE_TO]: function (state, { to }) { 
      state.currentPage = to;
    }
    , 
    [constants.SET_MOVIE_LIST] : function (state,  payload) { 
      state.moveList = payload;
    }
  },
  // 무거운 작업 - 작업 후 mutation 호출
  actions: {

    [constants.GET_MOVIE_LIST]: async function (state, payload ) { 
      // fetch 를 통해서 정보 가져오기
      console.log(payload)
      let key = "f5eef3421c602c6cb7ea224104795888"
      let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=`+ payload;

      let response = await fetch(url);
      let data = await response.json();
      console.log(data)
      let movieList = data.boxOfficeResult.dailyBoxOfficeList;
      state.commit(constants.SET_MOVIE_LIST, movieList);

    }
  },
  // 도메인에 따라서 module로 분리 가능!!
  modules: {
  },
    plugins: [
    createVuexPersistedState({
      key:'vuex',
      //storage: window.localStorage,
      // 세션에 따라 유지 
      storage : window.sessionStorage,
      whiteList:['jwtToken', 'moveList'],
      blackList: [],
    }),
  ],
})
