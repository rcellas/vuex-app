import { createStore } from "vuex";
// import axios from 'axios';

export default createStore({
  state: {
    todos: [
      {
        "id": 1,
        "title": "aa"
      },
      {
        "id": 2,
        "title": "bb"
      },
      {
        "id": 3,
        "title": "cc"
      },
      {
        "id": 4,
        "title": "dd"
      }
    ],
    notifications: [],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    // axios
    // set_todo(state,todos){
    //   state.todos = todos
    // },
    
    notification_app(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
      });
    },
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != 1) {
        state.todos[index] = todo;
      }
    },
    // post_todo(state,todos){
      // state.todos.push(todo);
    // },
    // put_todo(state,todos){
      //   let index = state.todos.findIndex((t) => t.id == todo.id);
      // if (index != 1) {
      //   state.todos[index] = todo;
      // }
    // },
  },
  actions: {
    addNotification({ commit }, notification) {
      commit("notification_app", notification);
    },
    addTodos({ commit, dispatch }, todo) {
      commit("add_todo", todo);
      dispatch(
        "addNotification",
        {
          type: "success",
          msg: "Has been created successfully",
        },
        { root: true }
      );
    },
    updateTodo({ commit, dispatch }, todo) {
      commit("update_todo", todo);
      dispatch(
        "addNotification",
        {
          type: "success",
          msg: "Has been updated successfully",
        },
        { root: true }
      );
    },
    // función para llamar a los axios
    // mostrar los datos
    // getTodos({ commit }) {
    //   axios
    //     .get("https://my-json-server.typicode.com/rcellas/data-bd")
    //     .then((todos) => {
    //       commit("set_todo", todos.data);
    //     });
    // },

    // Esta sería para hacer el create
    // postTodos({ commit }) {
    //   axios
    //     .post("https://my-json-server.typicode.com/rcellas/data-bd")
    //     .then((todos) => {
    //       commit("post_todo", todos.data);
    //     });
    // },

    // Esta sería para hacer el update 
    // putTodos({ commit }) {
    //   axios
    //     .put("https://my-json-server.typicode.com/rcellas/data-bd")
    //     .then((todos) => {
    //       commit("put_todo", todos.data);
    //     });
    // },
  },
  modules: {},
});
