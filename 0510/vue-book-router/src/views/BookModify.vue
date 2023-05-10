<template>
    <div>
     <h1 class="underline">SSAFY 도서 수정</h1>
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
            <button @click="modify">수정</button>
            <button @click="list">목록</button>
    </div>
    </div>
</template>
<script>
import { books } from '@/assets/data/data';
export default {
    name: 'BookModify',
     data() {
         return {
            books: books,
            book: { isbn: "", title: "", author: "", price: 0, desc: "" },
        };
    },
    created() {

        // router를 통해서 전달 받은 isbn을 이용하여 페이지 전환
        // const search = location.search;
        // const isbn = new URLSearchParams(location.search).get("isbn");
        // this.book = this.books[isbn];
        alert("전달받은 정보" + this.$route.params.id);
        this.book = books[this.$route.params.id];
        console.log(this.book);
    },
    methods: {
        modify() {
            // ajax 를 통해서 정보 변경 처리
            alert("수정되었습니다.");
        },
        list() {
            // router 를 통해서 페이지 전환
            this.$router.push("/list");
            // location.href = "/list.html";
        },
    },
};
</script>

<style scoped></style>