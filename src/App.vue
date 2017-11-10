<template>
  <div>
    <todolist></todolist>
  </div>
</template>

<script>
  /* eslint-disable indent,comma-dangle,semi */

  // eslint-disable-next-line no-unused-vars
  import todolist from './components/todolist'
export default {
  components: {
    todolist
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
