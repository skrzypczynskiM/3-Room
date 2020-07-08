<template>
  <ul class="menu">
    <li
      class="menu-item"
      :class="{ active: isMenuOpen }"
      v-on:click="toggleEditMode"
    >
      <span>{{ this.isEditMode ? 'Save' : 'Edit' }}</span>
    </li>
    <li
      v-on:click="resetAllTodos"
      class="menu-item"
      :class="{ active: isMenuOpen }"
    >
      <span>New Day</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoMenu',
  props: ['isMenuOpen', 'toggleEditMode', 'resetAllTodos', 'isEditMode'],
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  z-index: 101;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  bottom: 15%;
  right: 5%;
  max-width: 250px;

  & > .menu-item {
    font-size: 23px;
    letter-spacing: 1.5px;
    position: relative;
    z-index: 100;
    margin-top: 15px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0;
    color: black;
    & > span {
      @media (min-width: $laptop) {
        border-left: 3px solid transparent;
        display: inline-block;
        padding-left: 5px;
        transition: all 0.3s ease;
        width: 200px;

        &:hover {
          padding-left: 20px;
          border-left: 3px solid #3ca0e7;
          transition: all 0.5s ease;
        }
      }
    }

    @media (min-width: $laptop) {
      font-size: 30px;
    }

    &:first-child {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);

      &.active {
        transform: translateY(10px);
        opacity: 1;
      }
    }

    &:last-child {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.2s;
      &.active {
        transform: translateY(10px);
        opacity: 1;
      }
    }
  }
}
</style>
