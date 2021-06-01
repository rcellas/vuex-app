<template>
  <div>
      <div class="row">
        <input @change="todoTextChange" v-bind:value="todoText" class=" col-md form-control" type="text">
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
        todoTextChange (e){
            this.todoText = e.target.value;
        },
        addTodoInput(){
            this.addTodos({
                id: v1(),
                title: this.todoText
            });
            this.todoText = '';
        }
    }
}
</script>

<style>
</style>