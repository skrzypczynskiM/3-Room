<template>
  <span
    class="back"
    :class="{ appear: loadMedia || backStage !== 'init' }"
    v-on:click="$emit('stage-change', backStage)"
  >
    <BackIcon />
  </span>
</template>

<script>
import BackIcon from '../../../icons/Back';
export default {
  name: 'BackButton',
  props: ['backStage', 'loadMedia'],
  components: {
    BackIcon,
  },
};
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  bottom: 10px;
  left: 0px;
  opacity: 0;
  z-index: 999;
  transform: translateX(30px);
  transition: 0.4s ease;

  @media (min-width: $tablet) {
    position: absolute;
    bottom: unset;
    top: 15px;
    left: 15px;
  }

  &.appear {
    opacity: 1;
    transform: translateX(0);
  }

  & > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: #c51046;
    transition: all 0.3s;

    @media (min-width: $tablet) {
      width: 50px;
      height: 50px;
    }

    @media (min-width: $laptop) {
      fill: #fff;
    }

    &:hover {
      fill: #ef5482;
    }
  }

  &::after {
    content: 'back';
    color: #c51046;
    font-size: 19px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (min-width: $laptop) {
      font-size: 22px;
    }

    @media (min-width: $laptop) {
      display: none;
    }
  }
}
</style>
