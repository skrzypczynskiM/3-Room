<template>
  <div class="note">
    <h3 class="header">Top priority</h3>
    <CheckBox
      :completed="topPriorityTodo.completed"
      :top-priority-todo="topPriorityTodo"
      v-on:toggle-checkbox="$emit('toggle-checkbox', $event)"
    />
    <form v-if="showForm">
      <textarea
        v-on:keyup.enter="onEnter"
        type="text"
        rows="5"
        placeholder="Today's priority..."
        v-on:input="updatePriority($event)"
        ref="input"
        v-model="title"
      />
    </form>
    <p v-else class="priority-content">
      {{ this.topPriorityTodo.title }}
    </p>
  </div>
</template>

<script>
import CheckBox from './TodoPriorityCheckbox';

export default {
  name: 'Note',
  props: [
    'top-priority-todo',
    'isEditMode',
    'isPriorityTyping',
    'isResetAllTodos',
  ],
  data() {
    return {
      isTyping: false,
      title: '',
    };
  },

  methods: {
    onEnter() {
      if (this.topPriorityTodo.title.length === 0) return;
      else {
        if (!this.isEditMode) {
          this.isTyping = false;
        }
      }
    },

    updatePriority(e) {
      const value = e.target.value;
      this.$emit('priority-content', value);
      if (value.length === 0) {
        this.typing = true;
      }
    },
  },

  computed: {
    showForm() {
      if (this.isEditMode) return true;
      else if (this.isTyping) return true;
      else return false;
    },
  },
  mounted() {
    if (this.title) {
      this.isTyping = true;
      if (this.topPriorityTodo.title.length > 0)
        this.title = this.topPriorityTodo.title;
    }
  },

  components: {
    CheckBox,
  },

  watch: {
    isEditMode: function(newVal, oldVal) {
      if (oldVal && !newVal && this.isTyping) {
        this.isTyping = false;
      }
    },
    isResetAllTodos: function() {
      this.isTyping = true;
      this.title = '';
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  background: transparent;
}

.note {
  position: relative;
  background-image: url('../../../assets/note.png');
  width: 230px;
  height: 210px;
  padding: 70px 20px 40px 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 15px;

  & > .header {
    font-size: 16px;
    font-weight: 500;
    transform: rotate(-10deg) skew(-10deg, 0);
    position: absolute;
    top: 20px;
    left: 16px;
    text-decoration: underline;
    pointer-events: none;
    word-break: keep-all;
  }

  & > .priority-content {
    font-family: 'Kalam', cursive;
    font-family: 'Courgette', cursive;
    letter-spacing: 0.7px;
    padding: 0 15px;
    word-break: break-all;
    font-size: 18px;
    @media (min-width: $laptop) {
      font-size: 20px;
    }
  }

  & textarea {
    background: transparent;
    width: 100%;
    color: black;
    font-size: 15px;
    font-weight: 600;
    padding: 0 15px;
    letter-spacing: 0.7px;
    resize: none;
    scrollbar-width: none;

    @media (min-width: $tablet) {
      font-size: 17px;
    }

    @media (min-width: $laptopL) {
      font-size: 18px;
    }
    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
</style>
