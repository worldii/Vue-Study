<template>
    <div>
        <h1 class="underline">SSAFY 도서 등록</h1>
        <div class="regist_form">
              <label for="isbn">도서번호</label>
              <input type="text" id="isbn" name="isbn" v-model.lazy.trim="book.isbn" /><br />
              <label for="title">도서명</label>
              <input type="text" id="title" name="title" v-model.lazy.trim="book.title" /><br />
              <label for="author">저자</label>
              <input type="text" id="author" name="author" v-model.lazy.trim="book.author" /><br />
              <label for="price">가격</label>
              <input type="number" id="price" name="price" v-model.number.lazy.trim="book.price" /><br />
              <label for="content">설명</label>
              <br />
              <textarea id="content" name="content" cols="35" rows="5" v-model.lazy.trim="book.desc"></textarea><br />
          <button @click="regist">등록</button>
          <button @click="list">목록</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookCreate',
    data() {
        return {
            book: { isbn: "dsds", title: "dsds", author: "dsds", price: 1000, desc: "종하" },
        };
    },
    methods: {
        regist() {
            // 원격지 서버에 도서 등록하기  - ajax 

            alert("도서 등록 성공" + JSON.stringify(this.book));
            this.book = { isbn: "", title: "", author: "", price: 0, desc: "" };
        },
        list() {
            // router 로 대체 
            location.href = "/list";
        },
    },
    created() {},
};
</script>


<style scoped>
h1  {
    color: blue;
}
</style>