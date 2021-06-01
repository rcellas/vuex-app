<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
        <TodoItem :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import {mapGetters} from 'vuex';


export default {
 components: {
    TodoItem
  },
  computed:{
      ...mapGetters(["allTodos"])
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>