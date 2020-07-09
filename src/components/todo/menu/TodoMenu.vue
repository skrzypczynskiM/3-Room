<template>
  <ul class="menu">
    <li
      class="menu-item"
      :class="{ active: isMenuOpen }"
      v-on:click="toggleEditMode"
    >
      <a>{{ this.isEditMode ? 'Save' : 'Edit' }}</a>
    </li>
    <li
      v-on:click="resetAllTodos"
      class="menu-item"
      :class="{ active: isMenuOpen }"
    >
      <a>New Day</a>
    </li>

    <li class="menu-item" :class="{ active: isMenuOpen }">
      <router-link to="/motivation-room">Motivation Room</router-link>
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
    margin-bottom: 8px;

    & > a {
      @media (min-width: $laptop) {
        border-left: 3px solid transparent;
        display: inline-block;
        padding-left: 5px;
        transition: all 0.3s ease;
        width: 200px;
        text-decoration: none;
        color: black;
        line-height: 1.1;

        &:hover {
          padding-left: 20px;
          border-left: 3px solid #3ca0e7;
          transition: all 0.5s ease;
        }
      }
    }

    @media (min-width: $laptop) {
      font-size: 26px;
    }

    &:first-child {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);

      &.active {
        transform: translateY(10px);
        opacity: 1;
      }
    }

    &:nth-child(2) {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.2s;
      &.active {
        transform: translateY(10px);
        opacity: 1;
      }
    }

    &:nth-child(3) {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.4s;
      &.active {
        transform: translateY(10px);
        opacity: 1;
      }
    }
  }
}
</style>
