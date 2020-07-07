<template>
  <div class="menu-container" v-on:click="toggleMenu">
    <div class="v-line"></div>
    <div class="v-line"></div>
  </div>
</template>

<script>
export default {
  name: 'TodoMenuButton',
  props: ['toggleMenu'],
};
</script>

<style lang="scss" scoped>
.menu-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #282828;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  justify-content: center;
  right: 5%;
  bottom: 3%;
  border: 1px solid #1b1b1b;
  cursor: pointer;

  transition: all 0.3s;

  @media (min-width: $laptop) {
    width: 60px;
    height: 60px;
  }

  &:hover {
    background: #181818;
  }

  & > .v-line {
    height: 2px;
    background: #fafbfb;
    margin-left: 15px;

    @media (min-width: $laptop) {
      height: 3px;
      margin-left: 19px;
    }
    &:first-child {
      width: 35%;
    }
    &:last-child {
      width: 25%;
      margin-top: 5px;
    }
  }
}
</style>
