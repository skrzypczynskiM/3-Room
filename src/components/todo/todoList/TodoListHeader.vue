<template>
  <div class="todo-type">{{ upperCaseHeader }}</div>
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
  left: 17px;
  top: -20px;
  letter-spacing: 0.7px;
}
</style>
