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
  background: #d3cce3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* background-image: url('./assets/todo-bg.jpg');
  background-size: contain;
  background-repeat: no-repeat; */
}
</style>
