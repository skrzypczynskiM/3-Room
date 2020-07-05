<template>
  <transition name="slide-fade">
    <label :for="id" class="input-container">
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        type="text"
        :id="id"
        class="inputField"
        :style="labelColor"
      />
      <label :for="id" class="labelInput" :style="labelColor"
        >{{ placeholder }}
      </label>
    </label>
  </transition>
</template>

<script>
export default {
  name: 'TodoItemInput',
  props: ['value', 'placeholder', 'id', 'color'],

  computed: {
    labelColor() {
      return { '--hover-color': this.color };
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  height: 55px;
  display: inline-block;
  width: 80%;
  margin: 5px auto;
}
label {
  & > .labelInput {
    position: absolute;
    top: 7px;
    left: 7px;
    color: rgb(101, 119, 134);
    font-size: 13px;
  }
}

.inputField {
  border-bottom: 2px solid rgb(101, 119, 134);
  /* background: darken(rgb(245, 248, 250), 10%); */
  /* background: darken(rgb(245, 248, 250), 10%); */
  background: #ececec;
  color: black;
  font-size: 16px;
  padding: 14px 7px 0px;
  width: 100%;
  height: 100%;
  transition: all 0.3s;

  &:focus {
    border-bottom: 2px solid var(--hover-color);
    outline: none;

    & ~ .labelInput {
      color: var(--hover-color);
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
