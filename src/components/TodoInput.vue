<template>
  <div>
      <div class="row">
        <input v-model="todoText" class=" col-md form-control" type="text">
        <button @click="addTodoInput" class="btn btn-primary col-md-4">Add</button>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {v1} from 'uuid';

export default {
    data(){
        return{
            todoText:''
        }
    },
    methods:{
        ...mapActions(["addTodos"]),
        addTodoInput(){
            this.addTodos({
                id: v1(),
                title: this.todoText
            })
        }
    }
//   name: 'App',
//   // components: {
//   //   HelloWorld
//   // }
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