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
    color: $blue-weak;
    font-size: 13px;

    @media (min-width: $laptop) {
      top: 3px;
    }
  }
}

.inputField {
  border-bottom: 2px solid $blue-weak;
  background: #ececec;
  color: black;
  font-size: 16px;
  padding: 14px 7px 0px;
  width: 100%;
  height: 100%;
  transition: all 0.3s;

  @media (min-width: $laptop) {
    font-size: 19px;
  }

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
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
