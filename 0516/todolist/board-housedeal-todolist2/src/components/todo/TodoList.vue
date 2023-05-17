<template>
  <b-container class="bv-example-row">
    <b-row class="mt-4 mb-4 text-center">
      <b-col>
        <todo-list-item v-for="(todo, index) in todos" :key="index" :todo="todo" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
 import TodoListItem from "@/components/todo/TodoListItem";

import { mapState } from 'vuex';
export default {
  name: "TodoList",
  components: {
     TodoListItem,
  },
  computed: {
    // todos() {
     // return this.$store.state.todos;

     // state 가 여러개 있을 경우, map state 사용 가능
     ...mapState(["todos"]), 
    // },
  },
};
</script>

<style></style>
