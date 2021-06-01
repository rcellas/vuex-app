<template>
  <div>
    <div class="row my-3 justify-content-between">
      <h3 v-if="!editing" class="col-lg-4 col-md-auto">{{ todo.title }}</h3>
      <input
        v-bind:value="todoText"
        @change="todoTextChange"
        v-else
        type="text"
        class=" col-md form-control"
      />
      <h3 v-if="!editing" class="col-lg-4 col-md-auto">{{ todo.date }}</h3>
       <input
        v-bind:value="todoDate"
        @change="todoDateChange"
        v-else
        type="date"
        class="col-md form-control"
      />
      <button @click="updateTodoI(todo)" class=" col-lg-4 btn btn-success">
        {{ editing ? "Update" : "Edit" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: {},
  },
  data() {
    return {
      todoText: "",
      todoDate: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions(["updateTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
     todoDateChange(e) {
      this.todoDate = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = this.editing === true ? false : true;
      if (this.editing) {
        this.todoText = todo.title;
        this.todoDate = todo.date;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        todo.date = this.todoDate;
      }
    },
  },
};
</script>

<style></style>
