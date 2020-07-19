<template>
  <div class="main-wrapper">
    <!-- <router-link to="/bar">Go to Bar</router-link> -->
    <div class="doodle">
      <TodoRandomDoodles :isMenuOpen="isMenuOpen" />
    </div>
    <TodoMenuButton :toggleMenu="toggleMenu" />
    <TodoMenu
      :isMenuOpen="isMenuOpen"
      :toggleEditMode="toggleEditMode"
      :resetAllTodos="resetAllTodos"
      :isEditMode="isEditMode"
      v-on:reset="resetAllTodos"
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
          <TodoPriority
            :top-priority-todo="topPriorityTodo"
            v-on:toggle-checkbox="toggleCheckbox($event)"
            v-on:priority-content="updateTopPriority($event)"
            :isEditMode="isEditMode"
            :isResetAllTodos="isResetAllTodos"
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
import Header from '../components/todo/header/Header';
import TodoList from '../components/todo/todoList/TodoList';
import TodoMenuButton from '../components/todo/menu/TodoMenuButton';
import TodoMenu from '../components/todo/menu/TodoMenu';
import TodoPriority from '../components/todo/todoPriority/TodoPriority';
import TodoRandomDoodles from '../components/todo/background/TodoRandomDoodles';

import RadialBar from '../components/todo/progressBar/RadialBar';

import { saveTodoData } from '../components/helperFunctions/localStorage';

import { uuid } from 'vue-uuid';

export default {
  name: 'TodoRoom',
  components: {
    Header,
    TodoList,
    TodoMenu,
    TodoMenuButton,
    RadialBar,
    TodoPriority,
    TodoRandomDoodles,
  },
  data() {
    return {
      isMenuOpen: false,
      isEditMode: false,
      isResetAllTodos: false,

      topPriorityTodo: {
        title: '',
        completed: false,
      },
      todos: {
        'to-do': [],
        'place-to-go': [],
        'people-to-speak': [],
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

      // save to localStorage
      saveTodoData('todo', 'todos', this.todos);
    },

    deleteTodoItem(payload) {
      const { todoType, id } = payload;
      const newTodos = this.todos[todoType].filter((todo) => todo.id !== id);
      this.todos[todoType] = newTodos;

      // save to localStorage
      saveTodoData('todo', 'todos', this.todos);
    },

    toggleCheckbox(checkboxVal) {
      const value = checkboxVal;
      this.topPriorityTodo.completed = value;

      // save to localStorage
      saveTodoData('todo', 'priority', this.topPriorityTodo);
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },

    updateTopPriority(updatedVal) {
      const value = updatedVal;
      this.topPriorityTodo.title = value;

      // save to localStorage
      saveTodoData('todo', 'priority', this.topPriorityTodo);
    },

    toggleReset() {
      this.isResetAllTodos = !this.isResetAllTodos;
    },

    resetAllTodos() {
      this.isResetAllTodos = true;

      const defaultTodos = {
        'to-do': [],
        'place-to-go': [],
        'people-to-speak': [],
      };

      const defaultPriority = {
        title: '',
        completed: false,
      };

      this.todos = defaultTodos;
      this.topPriorityTodo = defaultPriority;

      // save to localStorage
      saveTodoData('todo', 'todos', this.todos);
      saveTodoData('todo', 'priority', this.topPriorityTodo);

      const todoInstance = this;

      setTimeout(todoInstance.toggleReset, 100);
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
    todos: {
      deep: true,
      handler() {
        saveTodoData('todo', 'todos', this.todos);
      },
    },
  },

  mounted() {
    const todo = JSON.parse(localStorage.getItem('todo'));
    if (todo) {
      this.todos = todo.todos;
      this.topPriorityTodo = todo.priority;
    }
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  background-image: url('../assets/todo-bg.jpg');
  background-size: 100%;
  padding: 50px 0;
  background-attachment: fixed;
  width: 100%;
  min-height: 100%;

  & > .doodle {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
  }
}

.content {
  border-radius: 6px;
  padding-bottom: 20px;
  width: 95%;
  position: relative;
  z-index: 2;

  @media (min-width: $mobileM) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: $mobileL) {
    width: 70%;
  }

  @media (min-width: $tablet) {
    width: 55%;
  }

  @media (min-width: $laptop) {
    width: 45%;
    background: #f0f0f0;
    margin: 0 auto;
    padding: 40px 20px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 33px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 33px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 33px -9px rgba(0, 0, 0, 0.75);

    background: #ece9e6;
    background: -webkit-linear-gradient(to right, #f5f5f5, #ece9e6);
    background: linear-gradient(to right, #f5f5f5, #ece9e6);
  }
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
    top: -4%;
    right: 3%;

    @media (min-width: $mobileL) {
      top: -2%;
      right: -15%;
    }

    @media (min-width: 590px) {
      right: 6%;
    }

    @media (min-width: $tablet) {
      right: -3%;
    }

    @media (min-width: $laptop) {
      top: 1%;
      right: 8%;
    }
  }

  & > .priority-container {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
