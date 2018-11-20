<template>
  <div id="app">
    <ul>
      <li v-for="item in todoList">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    todoList () {
      return this.$store.state.todoList
    }
  }

}
</script>

<style>

</style>
