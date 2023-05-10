<template>
    <div>
    <h1 class="underline">SSAFY 도서 정보</h1>
            <div class="regist_form" >
              <label for="isbn">도서번호</label>
              <div class="view">{{ book.isbn }}</div>
              <label for="title">도서명</label>
              <div class="view">{{ book.title }}</div>
              <label for="author">저자</label>
              <div class="view">{{ book.author }}</div>
              <label for="price">가격</label>
              <div class="view">{{ book.price }}원</div>
              <label for="content">설명</label>
              <div class="view">{{ book.desc }}</div>
              <div style="padding-top: 15px">
                <a  class="btn" @click="modifyBook">수정</a>
                <a  class="btn" @click="deleteBook">삭제</a>
                <a href="./list.html" class="btn">목록</a>
              </div>
            </div>
    </div>
</template>

<script>


import { books } from '@/assets/data/data';
export default {
    name: 'BookView',
    data() {
        return {
            book: { isbn: "", title: "", author: "", price: 0, desc: "" },
            books
        };
    },
  created() {
      // router를 통해서 전달 받은 isbn을 이용하여 페이지 전환
      alert(this.$route.params.id);
    //  console.log(this.$route.params.id);
      this.book = books[this.$route.params.id];
        
    },

    methods: {
      deleteBook() {
        alert("삭제되었습니다.");
        this.$router.push({
          path: '/list/'
        } );
               
        //    location.href = "/book/delete/"+this.book.isbn;
        },
      modifyBook() {
          console.log("/modify/"+ this.book.isbn )
        //location.href = "/book/modify/" + this.book.isbn;
        this.$router.push({
          path: '/modify/' + this.book.isbn,
          name: 'BookModify', params: { id: this.book.isbn }
        });
      },
    },
};
</script>

<style scoped></style>