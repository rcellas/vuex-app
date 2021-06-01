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
      console.log(todo)
    }
  },
  actions: {
    addTodos({commit}, todo){
      commit('add_todo', todo);
    }
  },
  modules: {
  }
})
