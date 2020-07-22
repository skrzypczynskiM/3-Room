<template>
  <ul class="menu forMobile" :class="{ active: isMenuOpen }">
    <li
      class="menu-item"
      :class="{ active: isMenuOpen }"
      v-on:click="toggleEditMode"
    >
      <a>{{ editState }}</a>
    </li>
    <li
      v-on:click="$emit('reset')"
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
  props: ['isMenuOpen', 'toggleEditMode', 'isEditMode'],

  computed: {
    editState() {
      return this.isEditMode ? 'Save' : 'Edit';
    },
  },
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
    font-size: 38px;
    letter-spacing: 1.5px;
    position: relative;
    z-index: 100;
    margin-top: 40px;
    font-weight: 300;
    cursor: pointer;
    opacity: 0;
    color: black;
    margin-bottom: 8px;
    padding-left: 20px;
    /* text-align: center; */

    @media (min-width: $laptop) {
      font-size: 23px;
      font-weight: 600;
      margin-top: 15px;
      padding-left: unset;
    }

    & > a {
      text-decoration: none;
      color: black;
      @media (min-width: $laptop) {
        border-left: 3px solid transparent;
        display: inline-block;
        padding-left: 5px;
        transition: all 0.3s ease;
        width: 200px;

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
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.3s;

      &.active {
        transform: translateY(10px);
        opacity: 1;
      }

      @media (min-width: $laptop) {
        transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
      }
    }

    &:nth-child(2) {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.5s;
      &.active {
        transform: translateY(10px);
        opacity: 1;
      }

      @media (min-width: $laptop) {
        transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.2s;
      }
    }

    &:nth-child(3) {
      transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.7s;
      &.active {
        transform: translateY(10px);
        opacity: 1;
      }
      @media (min-width: $laptop) {
        transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035) 0.4s;
      }
    }
  }
}
.forMobile {
  @media (max-width: $tablet) {
    background-color: #f5f6fa;
    z-index: 550;
    height: 100%;
    width: 0px;
    top: 0;
    overflow: hidden;
    right: 0;
    bottom: 0;
    position: fixed;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    &.active {
      width: 100%;

      -webkit-box-shadow: -10px 0px 11px -6px #85888c;
      -moz-box-shadow: -10px 0px 11px -6px #85888c;
      box-shadow: -10px 0px 11px -6px #85888c;

      & > a {
        font-size: 32px !important;
      }
    }
  }
}
</style>
