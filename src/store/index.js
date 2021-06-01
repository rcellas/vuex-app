import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {
        id:1,
        title: 'aa'
      },
      {
        id:2,
        title: 'bb'
      },
      {
        id:3,
        title: 'cc'
      },
      {
        id:4,
        title: 'dd'
      }
    ]
  },
  getters:{
    allTodos:(state)=>state.todos,
  },
  mutations: {
    add_todo(state,todo){
      state.todos.push(todo)
    },
    update_todo(state,todo){
      let index = state.todos.findIndex(t=> t.id == todo.id)
      if(index != 1){
        state.todos[index]=todo;
      }
    }
  },
  actions: {
    addTodos({commit}, todo){
      commit('add_todo', todo);
    },
    updateTodo({commit},todo){
      commit('update_todo',todo)
    }
  },
  modules: {
  }
})
