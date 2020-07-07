<template>
  <div id="app">
    <Todo></Todo>
  </div>
</template>

<script>
import Todo from './components/todo/MainTodo';
export default {
  name: 'App',
  components: { Todo },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
</style>
