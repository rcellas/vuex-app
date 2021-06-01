<template>
  <div id="modal">
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal">
        <div>
          <div class="modalVue">
            <form @submit="addTodoInput">
              <h2 class="title-modal">Create a new Task</h2>
              <p v-if="errors.length">
                <b v-for="error in errors" :key="error">{{ error }}</b>
              </p>
              <div class="mb-3">
                <label class="form-label title-modal">Task</label>
                <input
                  @change="todoTextChange"
                  v-bind:value="todoText"
                  class=" col-lg form-control input-create"
                  type="text"
                  placeholder="Add a new task"
                />
              </div>
              <div class="mb-3">
                <label class="form-label title-modal">Date task</label>
                <input
                  @change="todoDateChange"
                  v-bind:value="todoDate"
                  class=" col-lg form-control input-create"
                  type="date"
                  placeholder="Add a new date"
                />
              </div>
              <button
                type="submit"
                data-bs-dismiss="modal"
                class="btn btn-color col-lg-4"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </transition>
    <button @click="showModal = true" class="btn btn-primary">
      Create a new task
    </button>
  </div>
  <div class="modal"></div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
      todoDate: "",
      errors: [],
      showModal: false,
    };
  },
  methods: {
    ...mapActions(["addTodos"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    todoDateChange(e) {
      this.todoDate = e.target.value;
    },
    addTodoInput(e) {
      this.errors = [];
      if (!this.todoText || !this.todoDate) {
        this.errors.push("You have left an unfilled input");
      } else {
        this.showModal = false;
        this.addTodos({
          id: v1(),
          title: this.todoText,
          date: this.todoDate,
        });
        this.todoText = "";
        this.todoDate = "";
      }
      e.preventDefault();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  height: 100%;
}
#modal {
  /* width: 100%;
  height: 100%; */
  overflow: hidden;
}
.form-control {
  margin-right: 20px;
}
.btn-color {
  background: #6b0f1a !important;
  color: #fff !important;
  margin-top: 10px;
}
.modalVue {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 98;
  width: 350px;
  height: 400px;
  padding: 40px;
  border-radius: 4px;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
}

.title-modal {
  color: #6b0f1a !important;
}
</style>
