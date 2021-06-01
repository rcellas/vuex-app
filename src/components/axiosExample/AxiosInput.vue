<template>
  <div>
     <h3> {{todo.title}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'myStore',
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: mapState(['todos']),
  mounted() {
    this.$store.dispatch(" getTodos");
  }
}
</script>

<style></style>
