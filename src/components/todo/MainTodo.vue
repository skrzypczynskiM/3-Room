<template>
  <div class="main-wrapper">
    <TodoMenuButton :toggleMenu="toggleMenu" />
    <TodoMenu
      :isMenuOpen="isMenuOpen"
      :toggleEditMode="toggleEditMode"
      :resetAllTodos="resetAllTodos"
      :isEditMode="isEditMode"
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
            :isPriorityTyping="isPriorityTyping"
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

import { saveTodoData } from '../helperFunctions/localStorage';

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
      isMenuOpen: false,
      isEditMode: false,
      isResetAllTodos: false,
      isPriorityTyping: false,

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
      // localStorage.setItem('todos', JSON.stringify(this.todos))
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
      //  localStorage.setItem('priority', JSON.stringify(this.topPriorityTodo))
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
      if (this.topPriorityTodo.title.length === 0) {
        this.isPriorityTyping = false;
      }

      // save to localStorage
      saveTodoData('todo', 'priority', this.topPriorityTodo);
      // localStorage.setItem('priority', JSON.stringify(this.topPriorityTodo))
    },

    resetAllTodos() {
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
    todos: {
      deep: true,
      handler() {
        console.log('SAVED!');
        saveTodoData('todo', 'todos', this.todos);
      },
    },

    isResetAllTodos: function() {
      console.log('watch is RUN!');

      if (this.isResetAllTodos) {
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

        this.isResetAllTodos = false;

        // save to localStorage
        saveTodoData('todo', 'todos', this.todos);
        saveTodoData('todo', 'priority', this.topPriorityTodo);

        this.isPriorityTyping = false;
      }
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
  background: #cbd3de;
  background-image: url('../../assets/todo-bg.jpg');
  background-size: 100%;
}

.content {
  border-radius: 6px;
  padding-bottom: 20px;
  width: 95%;

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
    top: 1%;
    right: 3%;

    @media (min-width: $mobileL) {
      top: 2%;
      right: 10%;
    }

    @media (min-width: 590px) {
      right: 6%;
    }

    @media (min-width: $laptop) {
      right: 25%;
    }
  }

  & > .priority-container {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
</style>
