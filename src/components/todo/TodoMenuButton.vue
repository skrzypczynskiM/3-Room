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
  width: 42px;
  height: 42px;
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

  &:hover {
    background: #181818;
  }

  & > .v-line {
    height: 2px;
    background: #fafbfb;
    margin-left: 15px;
    &:first-child {
      width: 30%;
    }
    &:last-child {
      width: 20%;
      margin-top: 5px;
    }
  }
}
</style>
