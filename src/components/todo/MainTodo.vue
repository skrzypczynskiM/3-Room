<template>
  <div class="main-wrapper">
    <TodoMenuButton :toggleMenu="toggleMenu" />
    <!-- <ul class="menu">
      <li class="menu-item" :class="{ active: isMenuOpen }">Edit</li>
      <li class="menu-item" :class="{ active: isMenuOpen }">New Day</li>
    </ul> -->
    <TodoMenu
      :isMenuOpen="isMenuOpen"
      :toggleEditMode="toggleEditMode"
      :resetAllTodos="resetAllTodos"
    />
    <div class="content">
      <div class="header">
        <Header />

        <div class="radialBar-container">
          <RadialBar
            v-bind="completedTasks"
            :top-priority-todo="topPriorityTodo"
          />
        </div>
        <div class="priority-container">
          <!-- <TodoPriority /> -->
          <TodoPriority
            :top-priority-todo="topPriorityTodo"
            v-on:toggle-checkbox="toggleCheckbox($event)"
            v-on:priority-content="updateTopPriority($event)"
            :isEditMode="isEditMode"
          />
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
import TodoPriority from './TodoPriority';

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
    TodoPriority,
  },
  data() {
    return {
      // createNewTodo: false,
      isMenuOpen: false,
      isEditMode: false,
      isResetAllTodos: false,

      topPriorityTodo: {
        title: '',
        completed: false,
      },
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

    toggleCheckbox(checkboxVal) {
      const value = checkboxVal;
      this.topPriorityTodo.completed = value;
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    togglePriorityTask() {
      this.isEditMode = !this.isEditMode;
    },
    updateTopPriority(updatedVal) {
      const value = updatedVal;
      this.topPriorityTodo.title = value;
    },

    resetAllTodos() {
      // console.log('before: ', this.todos, value);
      // this.todos = { 'to-do': [], 'place-to-go': [], 'people-to-speak': [] };
      // this.topPriorityTodo = {
      //   title: '',
      //   completed: false,
      // };

      // console.log('after: ', this.todos);
      this.isResetAllTodos = !this.isResetAllTodos;
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

      if (this.topPriorityTodo.title) {
        allTasks++;
        if (this.topPriorityTodo.completed) {
          completedTasks++;
        }
      }

      isDayComplete = allTasks === completedTasks && allTasks > 0;

      return { allTasks, completedTasks, isDayComplete };
    },
  },

  watch: {
    isResetAllTodos: function() {
      if (this.isResetAllTodos)
        this.todos = { 'to-do': [], 'place-to-go': [], 'people-to-speak': [] };
      this.topPriorityTodo = {
        title: '',
        completed: false,
      };
      this.isResetAllTodos = false;
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
  background-image: url('../../assets/todo-bg.jpg');
  border-radius: 6px;
  padding-bottom: 20px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > header {
    align-self: flex-start;
  }

  & > .radialBar-container {
    position: absolute;
    /* top: 10%;
    right: 10%; */
    top: 1%;
    right: 3%;
  }

  & > .priority-container {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
</style>
