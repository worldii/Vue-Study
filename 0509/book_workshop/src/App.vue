<template>
  <div id="app">
   <ul>
          <TheNavi></TheNavi>
          
    <li>
      <a href="./create.html">도서 등록</a>
    </li>
    <li>
      <a href="./list.html">도서 목록</a>
    </li>

  </ul>
      <BookCreate></BookCreate>
  
      <book-list></book-list>
      <book-modify></book-modify>
      <book-view-vue :book="book"></book-view-vue>

  </div>
</template>

<script>
import { books } from '@/assets/data/data.js';

import TheNavi from './components/TheNavi.vue';
import BookCreate from './views/BookCreate.vue';
import BookList from './views/BookList.vue';
import BookModify from './views/BookModify.vue';
import BookViewVue from './views/BookView.vue';
export default {

  components: {
    TheNavi,
    BookCreate,
    BookList,
    BookModify,
    BookViewVue
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
  methods: {},
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
