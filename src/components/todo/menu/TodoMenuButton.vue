<template>
  <div class="menu-container" v-on:click="toggleMenu">
    <button class="hamburger" :class="{ active: isMenuOpen }" aria-label="Menu">
      <span class="hamburger__container" tabindex="-1">
        <span class="hamburger__bars"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoMenuButton',
  props: ['toggleMenu', 'isMenuOpen'],
};
</script>

<style lang="scss" scoped>
.menu-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #282828;
  display: flex;

  position: fixed;
  z-index: 800;
  justify-content: center;
  align-items: center;
  right: 5%;
  bottom: 3%;
  border: 1px solid #1b1b1b;
  cursor: pointer;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.3s;

  @media (min-width: $laptop) {
    width: 60px;
    height: 60px;
  }

  &:hover {
    background: #181818;
  }
}

.hamburger {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    & > .hamburger__container {
      box-shadow: 0 0 2px 2px #51a7e8;
    }
  }
}

.hamburger__container {
  display: flex;
  align-items: center;
  position: relative;
  width: 25px;
  height: 25px;
}

.hamburger__bars {
  position: absolute;
  width: 25px;
  height: 2px;
  background-color: white;
  transition: transform 220ms ease-in-out;
  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: white;
    content: '';
  }
  &:before {
    top: -8px;
    transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
  }
  &:after {
    bottom: -8px;
    transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
  }
}

.active {
  .hamburger__bars {
    transform: rotate(225deg);
    transition: transform 220ms 120ms ease-in-out;
    height: 3px;
    &:before {
      top: 0;
      transition: top 100ms ease-out;
      height: 3px;
    }
    &:after {
      bottom: 0;
      height: 3px;
      transform: rotate(-90deg);
      transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
    }
  }
}

.hamburger,
.hamburger__container {
  &:focus {
    outline: none;
  }
}
</style>
