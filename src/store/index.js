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
    ],
    notifications:[]
  },
  getters:{
    allTodos:(state)=>state.todos,
  },
  mutations: {
    notification_app(state,notification){
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36)+Date.now().toString(36)).substr(2)
      })
    },
    add_todo(state,todo){
      state.todos.push(todo)
    },
    update_todo(state,todo){
      let index = state.todos.findIndex(t=> t.id == todo.id)
      if(index != 1){
        state.todos[index]=todo;
      }
    },
  },
  actions: {
    addNotification({commit},notification){
      commit('notification_app',notification)
    },
    addTodos({commit, dispatch}, todo){
      commit('add_todo', todo);
      dispatch('addNotification',{
        type:'success',
        msg: 'Has been created successfully'
      },{root:true})
    },
    updateTodo({commit,dispatch},todo){
      commit('update_todo',todo)
      dispatch('addNotification',{
        type:'success',
        msg: 'Has been updated successfully'
      },{root:true})
    },
  },
  modules: {
  }
})
