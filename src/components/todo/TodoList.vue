<template>
  <div class="todo-list-container">
    <TodoListHeader v-bind:type-of-todo="todoType" />
    <TodoItemAdd
      :toggleNewTodo="toggleNewTodo"
      :createNewTodo="createNewTodo"
    />

    <div v-if="isEmpty" class="empty-todo-list" v-on:click="toggleNewTodo">
      This notebook is empty
    </div>

    <ul v-else class="todo-list">
      <TodoItem
        v-bind:key="todo.id"
        v-for="todo in todoList"
        v-bind:todo="todo"
        :isEditMode="isEditMode"
        :todo-type="todoType"
        v-on:delete-todo="
          $emit('delete-todo', { todoType: todoType, id: todo.id })
        "
      />
    </ul>

    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <form v-show="createNewTodo" @submit.prevent="addTodo">
        <TodoItemInput
          v-model="todo.title"
          placeholder="Task"
          :id="generateId()"
          :color="chooseThemeColor()"
        />
        <TodoItemInput
          v-model="todo.note"
          placeholder="Note (optional)"
          :id="generateId()"
          :color="chooseThemeColor()"
        />
        <!-- <p>THE TODO title: {{ this.title }}</p> -->
        <button type="submit" class="addTodoButton">Add Task</button>
      </form>
    </transition>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import TodoListHeader from './TodoListHeader';
import TodoItemAdd from './TodoItemAdd';
import TodoItemInput from './TodoItemInput';

import { uuid } from 'vue-uuid';

export default {
  name: 'todo-list',

  data() {
    return {
      createNewTodo: false,

      todo: {
        title: '',
        note: '',
      },
    };
  },

  props: ['todo-type', 'todo-list', 'isMenuOpen', 'isEditMode'],

  methods: {
    generateId() {
      return uuid.v4();
    },

    toggleNewTodo() {
      this.createNewTodo = !this.createNewTodo;
    },

    chooseThemeColor() {
      switch (this.todoType) {
        case 'to-do':
          return '#eb5fac';
        case 'place-to-go':
          return '#47a09d';
        case 'people-to-speak':
          return '#e78456';
      }
    },

    addTodo() {
      const newTodo = {
        title: this.todo.title,
        note: this.todo.note,
        completed: false,
      };

      this.$emit('add-todo', { todoType: this.todoType, newTodo });

      this.todo.title = '';
      this.todo.note = '';
    },

    enter(el) {
      el.style.height = 'auto';
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = 'auto';
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },
  },

  computed: {
    isEmpty() {
      return Object.keys(this.todoList).length === 0;
    },
  },

  components: {
    TodoItem,
    TodoListHeader,
    TodoItemAdd,
    TodoItemInput,
  },
};
</script>

<style lang="scss" scoped>
.todo-list-container {
  position: relative;
  margin: 38px 20px;
  padding: 40px 20px;
  background: #fafbfb;
  border-radius: 8px;
  -webkit-box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.75);

  @media (min-width: $laptop) {
    padding: 40px 20px 30px 20px;
    margin: 38px 30px;
  }

  &:nth-child(2) > .todo-type {
    background: $pinky;
  }

  &:nth-child(2) form .addTodoButton {
    background: $pinky;

    &:hover {
      background: darken($pinky, 10%);
    }
  }

  &:nth-child(3) > .todo-type {
    background: $blue-off;
  }

  &:nth-child(3) form .addTodoButton {
    background: $blue-off;
    &:hover {
      background: darken($blue-off, 10%);
    }
  }
  &:nth-child(4) > .todo-type {
    background: $orange-off;
  }

  &:nth-child(4) form .addTodoButton {
    background: $orange-off;
    &:hover {
      background: darken($orange-off, 10%);
    }
  }
}

form {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-todo-list {
  color: #4c4848;
  text-align: center;
  margin: 10px;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: darken(#4c4848, 30%);
  }

  @media (min-width: $laptop) {
    font-size: 21px;
  }
}

.todo-list {
  width: 95%;

  /* padding: 40px 20px; */
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
}

.addTodoButton {
  margin-top: 10px;
  width: 40%;
  padding: 4px 8px;
  border-radius: 6px;
  color: white;
  /* background: $pinky; */
  cursor: pointer;
  font-size: 13px;

  transition: all 0.3s;

  @media (min-width: $tablet) {
    padding: 7px 10px;
    font-size: 17px;
    margin-top: 20px;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
