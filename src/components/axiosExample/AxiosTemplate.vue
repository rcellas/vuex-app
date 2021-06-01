<template>
  <div >
      <Axios v-for="todo in todos" :key="todo.id"/>
    
  </div>
</template>

<script>
import Axios from './AxiosInput';
import {mapState} from 'vuex';

export default {
  name: 'myStore',
  components: {
    Axios,
  },
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: mapState(['todos']),
  mounted() {
    this.$store.dispatch("getTodos");
  }
}
</script>

<style></style>
