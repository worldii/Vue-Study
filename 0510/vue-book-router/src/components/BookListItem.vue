<template>
    <tr prop= "book, index " @click="detail(book.isbn)">
                        <td>{{ index + 1 }}</td>
                        <td>{{ book.isbn }}</td>
                        <td>{{ book.title }}</td>
                        <td>{{ book.author }}</td>
                        <td>{{ book.price }}</td>
    </tr>
</template>

<script>
export default {
    name: 'BookListItem',
    props: {
        book: Object,
        index: Number
    },
  
  
    methods: {
       detail(isbn) {
           //location.href = "/book/" + isbn;

            this.$router.push({

                path: '/book/' + isbn,
                
                name: 'BookView', params: { id: isbn }
            });
        }
    },
};
</script>

<style scoped></style>