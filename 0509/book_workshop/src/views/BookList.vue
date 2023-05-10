<template>
    <div>
      <div v-if="books">
              <table id="book-list">
                <colgroup>
                  <col style="width: 5%" />
                  <col style="width: 20%" />
                  <col style="width: 40%" />
                  <col style="width: 20%" />
                  <col style="width: 15%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>ISBN</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th>가격</th>
                  </tr>
                </thead>
                <tbody>
                    <book-list-item v-for="(book, key,  index) in books" :key="key" :book="book" :index="index"></book-list-item>
                </tbody>
              </table>
            </div>
            <div class="text-center" v-else>등록된 도서가 없습니다.</div>

    </div>
</template>

<script>

import BookListItem from '@/components/BookListItem.vue';
import { books } from '@/assets/data/data.js';
export default {
    name: 'BookList',
    components: {BookListItem},
    data() {
        return {
            books: [],
        };
    },
    created() {
        this.books = books;
    },
    methods: {},
};
</script>

<style scoped></style>