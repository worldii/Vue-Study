<template>
  <div id="app">
   <ul>
    <TheNavi></TheNavi>    
    <li>
      <router-link to="/create">도서 등록</router-link>
    </li>
    <li>
      <router-link to="/list">도서 목록</router-link>
    </li>
 
    <li>
      <router-link to="/user">사용자 보기</router-link>
    </li>
    <li>
      <router-link to="/user/hong">사용자 보기 1 </router-link>
    </li>

    <li>
      <router-link to="/user/jang">사용자 보기 2 </router-link>
    </li>

    <li>
      <router-link :to="{path:'/user/jang',  query : {
        name : '장동건',
        age : 40
      }}">사용자 보기 3 
      </router-link>
    </li>
    <li>
      <router-link :to="{name :'UserView', params : {id:'lim'},  path:'/user/jang',  query : {
        name : '장동건',
        age : 40
      }}">사용자 보기 4 
      </router-link>
    </li>

    <li>
      <button @click="move('kim', 30, 'busan')"> 프로그래밍
      </button>
    </li>

    <li>
      <router-link to="/user/jang/shopping">쇼핑 목록</router-link>
    </li>
    <li>
      <router-link to="/user/jang/profile">사용자 프로필</router-link>
    </li>

  </ul>
    <router-view></router-view>
  </div>
</template>

<script>

import { books } from '@/assets/data/data.js';
import TheNavi from './components/TheNavi.vue';

export default {
  methods: {
    move(id, age, addr) { 
      this.$router.push({
        name: 'UserView',
        params: {
          id: id,
        },
        query: {
          age: age,
          addr: addr,
        },
      });
    },
  },
  components: {
    TheNavi,
  },
  data() {
    return {
      book : Object,
      message: '',
    };
  },
  created() {
    this.book = books['111-222-7777']
  },
};

</script>
<!-- style 에 scope 가 없다. -->
<style>
a {
  text-decoration: none;
  color: #787878;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
label {
  display: inline-block;
  width: 80px;
}
button,
.btn {
  width: 8%;
  background-color: #d0d3d0;
  color: rgb(80, 82, 79);
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid #787878;
  border-radius: 4px;
  font-size: large;
  cursor: pointer;
}
.regist {
  padding: 10px;
}
.regist_form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.ssafy_logo {
  width: 150px;
}
.header {
  text-align: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
}
.header img {
  vertical-align: middle;
}
.logo {
  display: inline-block;
  font-size: 30pt;
  font-weight: bold;
}
.underline {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, cyan 30%);
}
#book-list {
  border-collapse: collapse;
  width: 100%;
}

#book-list thead {
  background-color: #ccc;
  font-weight: bold;
}

#book-list td,
#book-list th {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

</style>
