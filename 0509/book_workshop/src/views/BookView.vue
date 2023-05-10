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
                <a href="#" class="btn" @click="modifyBook">수정</a>
                <a href="#" class="btn" @click="deleteBook">삭제</a>
                <a href="./list.html" class="btn">목록</a>
              </div>
            </div>
    </div>
</template>

<script>


export default {
    name: 'BookView',
    
    props: {
      book: Object,
    
    },

    methods: {
        deleteBook() {
            location.href = "/work/delete.html?isbn=" + this.book.isbn;
        },
        modifyBook() {
            location.href = "/work/modify.html?isbn=" + this.book.isbn;
        },
    },
};
</script>

<style scoped></style>