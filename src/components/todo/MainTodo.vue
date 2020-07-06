<template>
  <div class="main-wrapper">
    <TodoMenuButton :toggleMenu="toggleMenu" />
    <!-- <ul class="menu">
      <li class="menu-item" :class="{ active: isMenuOpen }">Edit</li>
      <li class="menu-item" :class="{ active: isMenuOpen }">New Day</li>
    </ul> -->
    <TodoMenu :isMenuOpen="isMenuOpen" :toggleEditMode="toggleEditMode" />
    <div class="content">
      <div class="header">
        <Header />
        <div class="radialBar-container">
          <RadialBar v-bind="completedTasks" />
        </div>
      </div>

      <TodoList
        v-on:add-todo="addTodoItem"
        v-on:delete-todo="deleteTodoItem"
        v-for="(todoList, todoType, index) in todos"
        :key="index"
        :todo-type="todoType"
        :todo-list="todoList"
        :isMenuOpen="isMenuOpen"
        :isEditMode="isEditMode"
      />
    </div>
  </div>
</template>

<script>
import Header from './Header';
import TodoList from './TodoList';
import TodoMenuButton from './TodoMenuButton';
import TodoMenu from './TodoMenu';

import RadialBar from './RadialBar';

import { uuid } from 'vue-uuid';

export default {
  name: 'MainTodo',
  components: {
    Header,
    TodoList,
    TodoMenu,
    TodoMenuButton,
    RadialBar,
  },
  data() {
    return {
      // createNewTodo: false,
      isMenuOpen: false,
      isEditMode: false,
      todos: {
        'to-do': [
          {
            title: 'Make dinner',
            note: '1pm',
            completed: false,
            id: 1,
          },
          {
            title: 'Learn Vue',
            note: '2pm-3.30pm',
            completed: false,
            id: 2,
          },
          {
            title: 'Play chess',
            note: '4pm-4.30pm',
            completed: false,
            id: 3,
          },
        ],
        'place-to-go': [
          {
            title: 'Meeting with coworker',
            note: '1pm',
            completed: false,
            id: 4,
          },
          {
            title: 'Dinner with girlfriend',
            note: '2pm-3.30pm',
            completed: false,
            id: 5,
          },
        ],

        'people-to-speak': [
          {
            title: 'Call my mom',
            note: '1pm',
            completed: false,
            id: 6,
          },
          {
            title: 'Call friend',
            note: '2pm-3.30pm',
            completed: false,
            id: 7,
          },
        ],
      },
    };
  },
  methods: {
    addTodoItem(payload) {
      const { todoType, newTodo } = payload;
      const id = uuid.v4();
      this.todos[todoType].push({
        ...newTodo,
        id,
      });
    },

    deleteTodoItem(payload) {
      const { todoType, id } = payload;
      const newTodos = this.todos[todoType].filter((todo) => todo.id !== id);
      this.todos[todoType] = newTodos;
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
  },

  computed: {
    completedTasks() {
      let allTasks = 0;
      let completedTasks = 0;
      let isDayComplete = false;

      Object.keys(this.todos).forEach((todoList) => {
        this.todos[todoList].forEach((todo) => {
          allTasks++;
          if (todo.completed) completedTasks++;
        });
      });

      isDayComplete = allTasks === completedTasks && allTasks > 0;
      console.log();

      return { allTasks, completedTasks, isDayComplete };
    },
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  background: #cbd3de;
}

.content {
  background: #f5f5f5;
  border-radius: 6px;
  padding-bottom: 20px;
}

.header {
  /* display: flex; */
  /* justify-content: space-around; */
  margin-bottom: 130px;

  & > .radialBar-container {
    position: absolute;
    top: 10%;
    right: 10%;
  }
}
</style>
