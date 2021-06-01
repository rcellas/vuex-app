<template>
  <div>
      <div class="row">
        <input @change="todoTextChange" v-bind:value="todoText" class=" col-lg form-control input-create" type="text" placeholder="Add a new task">
        <button @click="addTodoInput" class="btn btn-color col-lg-4">Add</button>
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
    .form-control{
        margin-right: 20px;
    }
    .btn-color{
        background: #6b0f1a !important;
        color: #fff !important;
    }
</style>