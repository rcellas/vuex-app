<template>
  <div id="app" class="container">
    <TodoInput/>
    <TodoList/>
    <NotificationList/>
    
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import NotificationList from './components//NotificationList.vue';


export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    NotificationList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
