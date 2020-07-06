<template>
  <div class="todo-type">{{ upperCaseHeader }}</div>
  <!-- <div class="todo-type"></div> -->
</template>

<script>
export default {
  name: 'TodoListHeader',
  props: ['type-of-todo'],

  computed: {
    upperCaseHeader: function() {
      return this.typeOfTodo.replace(/-/g, ' ').toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-type {
  padding: 7px 12px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  position: absolute;
  font-weight: 700;
  left: 5%;
  top: -5%;
  letter-spacing: 0.7px;
}
</style>
