<template>
  <div class="regist">
    <h1 class="underline">SSAFY 글 상세보기</h1>
    <div class="regist_form">
      <label> 글번호</label>
      <div class="view">{{ article.articleno }}</div>
      <label> 글제목</label>
      <div class="view">{{ article.subject }}</div>
      <label> 작성자</label>
      <div class="view">{{ article.userid }}</div>
      <label> 조회수</label>
      <div class="view">{{ article.hit }}</div>
      <label> 작성시간</label>
      <div class="view">{{ article.regtime }}</div>
      <label> 내용</label>
      <div class="view">{{ article.content }}</div>

      <div style="padding-top: 15px">
        <button class="btn" @click="moveModifyArticle">수정</button>
        <button class="btn" @click="deleteArticle">삭제</button>
        <button class="btn" @click="moveList">목록</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BoardView",
  data() {
    return {
      articleno: Number,
      article: Object,
    };
  },
  created() {
    // 비동기
    // TODO : 글번호에 해당하는 글정보 얻기.
    this.articleno = this.$route.params.articleno;
    
    axios.get("http://localhost:9999/vue/board/" + this.articleno)
      .then((response) => {
        console.log(response.data);
        this.article = response.data;
      })
      .catch((error) => {
        console.log(error);
      });


  },
  methods: {
    moveModifyArticle() {
      console.log("글수정 하러가자!!!");
      this.$router.push({ name: "boardmodify", params: { articleno: this.article.articleno } });
    },
    deleteArticle() {
      console.log("글삭제 하러가자!!!");
      this.$router.push({ name: "boarddelete", params: { articleno: this.article.articleno } });
    },
    moveList() {
      console.log("글목록 보러가자!!!");
      this.$router.push({ name: "boardlist" });
    },
  },
};
</script>

<style></style>
