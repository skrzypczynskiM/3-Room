<template>
  <button class="pulsingButton" :class="{ appear: showButton }">
    <slot>Let's get back to work!</slot>
  </button>
</template>

<script>
export default {
  name: 'PulsingButton',
  props: ['showButton'],
};
</script>

<style lang="scss" scoped>
.pulsingButton {
  cursor: pointer;
  font-size: 16px;
  margin: 0 auto;

  text-align: center;
  white-space: nowrap;
  display: block;
  padding: 12px 10px;
  box-shadow: 0 0 0 0 rgba(197, 16, 70, 0.7);
  border-radius: 10px;
  background-color: #c51046;
  -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  color: #ffffff;
  opacity: 0;
  /* transform: translateY(30px); */
  position: absolute;
  bottom: 15%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  transition: all 300ms ease-in-out;

  @media (min-width: $mobileL) {
    bottom: 15%;
  }

  @media (min-width: $laptop) {
    font-size: 21px;
    margin-bottom: 20px;
    bottom: 7%;
  }

  &.appear {
    opacity: 1;
    /* transform: translateY(0); */
  }
  &:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: #ffffff;
    background-color: darken(#c51046, 10%);
  }
}

@-webkit-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@-moz-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@-ms-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}
</style>
