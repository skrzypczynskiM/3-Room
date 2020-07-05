<template>
  <transition name="remove-item">
    <li class="todo-item-container">
      <span
        class="deleteButton"
        :class="{ editMode: isEditMode }"
        title="delete task"
        v-on:click="$emit('delete-todo', { todoType: todoType, id: todo.id })"
        >&times;</span
      >
      <input
        type="checkbox"
        v-bind:id="todo.id"
        v-on:change="isComplete"
        v-bind:checked="todo.completed"
      />
      <label v-bind:for="todo.id"
        ><div class="circle"></div>
        <CheckIcon />
      </label>
      <div class="todo-content">
        <p class="title" v-bind:class="{ 'is-complete': todo.completed }">
          {{ todo.title }}
        </p>
        <span class="note" v-bind:class="{ 'is-complete': todo.completed }">{{
          todo.note
        }}</span>
      </div>
    </li>
  </transition>
</template>

<script>
import CheckIcon from '../../../icons/Check';

export default {
  name: 'todo-item',
  props: ['todo', 'isEditMode', 'todo-type'],
  methods: {
    isComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
  components: {
    CheckIcon,
  },
};
</script>

<style lang="scss" scoped>
.todo-item-container {
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 10px;

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }

  & > input {
    display: none;

    &:checked + label .circle {
      transform: scale(0);
      position: absolute;

      & ~ svg {
        display: inline-block;
        transform: scale(1);
      }
    }
  }

  & > .deleteButton {
    display: none;
    position: absolute;

    top: -3%;
    right: 0;
    font-size: 16px;
    color: rgb(167, 167, 167);
    height: 20px;
    width: 20px;
    background: transparent;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &.editMode {
      display: flex;
      justify-content: center;
      align-items: center;
      /* transform: scale(0); */
      &:hover {
        background: #e0e0e0;
        color: black;
        /* transform: scale(1); */
      }
    }
  }
}
.todo-content {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  & .title {
    font-size: 15px;
    font-weight: 600;

    &.is-complete {
      text-decoration: line-through;
    }
  }

  & .note {
    font-size: 11px;
    margin-top: 3px;
    color: #b0b0b0;

    &.is-complete {
      text-decoration: line-through;
    }
  }
}

.circle {
  width: 15px;
  height: 15px;
  border: 2px solid #bebebe;
  border-radius: 50%;
  transform: scale(1);
  cursor: pointer;
  position: absolute;
  transition: all 0.2s;

  & ~ svg {
    transform: scale(0);
    fill: #4dff4d;
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    transition: all 0.2s 0.1s;
  }
}

.remove-item-enter-active {
  transition: all 0.3s ease;
}

.remove-item-leave-active {
  transition: all 0.3s ease;
}

.remove-item-enter,
.remove-item-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
