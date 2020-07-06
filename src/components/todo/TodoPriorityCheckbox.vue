<template>
  <div class="checkbox-holder">
    <input
      type="checkbox"
      id="checkbox"
      :checked="checked"
      v-on:change="toggleCheckbox"
    />
    <label for="checkbox" class="label">
      <div class="check" :class="{ completed: checked }"></div>
      <Check :class="{ completed: checked }" />
    </label>
  </div>
</template>

<script>
import Check from '../../../icons/Check2';

export default {
  name: 'Checkbox',
  props: ['completed'],
  data() {
    return {
      checked: false,
    };
  },
  components: {
    Check,
  },

  methods: {
    toggleCheckbox() {
      this.checked = !this.checked;
      this.$emit('toggle-checkbox', this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-holder {
  position: absolute;
  top: -10px;
  right: 12px;
  top: 8%;
  right: 30%;

  & > input {
    display: none;
  }

  & .label {
    cursor: pointer;

    position: absolute;

    & > .check {
      width: 25px;
      height: 25px;
      border-radius: 25%;
      border: 2px solid #bebebe;
      position: absolute;
      transition: all 0.2s;

      &.completed {
        transform: scale(0);
      }
    }

    & > svg {
      position: absolute;
      top: -25px;
      fill: #4dff4d;
      width: 50px;
      height: 50px;
      cursor: pointer;
      transform: scale(0);
      transition: all 0.2s 0.1s;

      &.completed {
        transform: scale(1);
      }
    }
  }
}
</style>
