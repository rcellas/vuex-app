<template>
    <div>
        <div class="row my-3 justify-content-between">
            <h3 v-if="!editing" class="col-lg-auto">{{todo.title}}</h3>
            <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class=" col-md form-control">
            <button @click="updateTodoI(todo)" class=" col-lg-4 btn btn-success">{{editing? 'Update': 'Edit'}}</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props:{
        todo:{},
    },
    data(){
        return{
            todoText:"",
            editing :false
        }
    },
    methods:{
        ...mapActions(['updateTodo']),
        todoTextChange(e){
            this.todoText = e.target.value
        },
        updateTodoI(todo){
            this.editing = this.editing === true ? false : true;
            if(this.editing){
                this.todoText= todo.title;
                this.updateTodo(todo)
            }else{
                todo.title = this.todoText;
            }
        }
    }
}
</script>

<style>
</style>