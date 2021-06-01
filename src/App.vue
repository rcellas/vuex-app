<template>
  <div id="app" class="container">
    <h1 class="title-app">Task list vue/vuex</h1>
      <TodoButtonAdd/>
      <TodoList/>
      <!-- <AxiosTemplate/> -->
      <NotificationList/>
  </div>
</template>

<script>
import TodoButtonAdd from './components/Todo/TodoButtonAdd.vue'
import TodoList from './components/Todo/TodoList.vue'
import NotificationList from './components/Notifications/NotificationList.vue';
// import AxiosTemplate from './components/axiosExample/AxiosTemplate.vue';

export default {
  name: 'App',
  components: {
    TodoButtonAdd,
    TodoList,
    NotificationList,
    // AxiosTemplate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);
  padding-top: 30px;
  height: 100%;
}

#app .title-app{
  margin-bottom: 20px;
}

#app .content-app{
  background-color: #f6f6f6;
background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
}

@media (max-width: 750px) {
  #app{
    height: auto;
  }
}
</style>
