<template>
  <ul class="menu">
    <li
      class="menu-item"
      :class="{ active: isMenuOpen }"
      v-on:click="toggleEditMode"
    >
      Edit
    </li>
    <li class="menu-item" :class="{ active: isMenuOpen }">New Day</li>
  </ul>
</template>

<script>
export default {
  name: 'TodoMenu',
  props: ['isMenuOpen', 'toggleEditMode'],
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

  & > .menu-item {
    font-size: 23px;
    letter-spacing: 1.5px;
    position: relative;
    z-index: 100;
    margin-top: 15px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0;

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
