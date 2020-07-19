<template>
  <span class="back">
    <BackIcon />
  </span>
</template>

<script>
import BackIcon from '../../../icons/Back';
export default {
  name: 'BackButton',
  components: {
    BackIcon,
  },
};
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  /* opacity: 0; */
  /* transform: translateX(20px); */
  transition: 0.3s ease;

  &.appear {
    opacity: 1;
    transform: translateX(0);
  }

  & > svg {
    width: 50px;
    height: 50px;
    fill: #fff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      fill: #ef5482;
    }
  }
}
</style>
