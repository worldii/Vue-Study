<template>
  <div class="regist">
    <h1>SSAFY 글 삭제</h1>
    <div>삭제중....</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BoardDelete",
  data() {
    return {
      articleno: Number,
    };
  },
  created() {
    // 비동기
    // TODO : 글번호에 해당하는 글을 삭제.
    this.articleno = this.$route.params.articleno;
    axios.delete("http://localhost:9999/vue/board/" + this.articleno)
      .then((response) => {
        console.log(response.data);
        this.$router.push({ name: "boardlist" });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
