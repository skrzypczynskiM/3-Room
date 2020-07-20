<template>
  <button
    v-on:click="$emit('next-step')"
    v-if="!isSelected"
    class="next-step-mobile"
    :class="{ active: desire.length > 0 }"
  >
    <slot>Next</slot>
  </button>
</template>

<script>
export default {
  name: 'NextButton',
  props: ['isSelected', 'desire'],
};
</script>

<style lang="scss" scoped>
.next-step-mobile {
  position: relative;
  width: 120px;
  height: 40px;
  padding: 6px 8px;
  color: white;
  border-radius: 4px;
  background: #f32160;
  opacity: 0.2;
  margin: 0 0 10px;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: all 0.3s;

  @media (min-width: $mobileL) {
    width: 160px;
  }

  @media (min-width: $tablet) {
    width: 170px;
  }

  @media (min-width: $laptop) {
    display: none;
  }

  &::after {
    content: '\2192';
    position: absolute;
    vertical-align: middle;
    right: 0;
    opacity: 0;
    top: 0;
    transition: all 0.3s;
    color: white;
    font-size: 23px;
    font-weight: 600;
    font-size: 24px;
  }

  &.active {
    opacity: 1;
    pointer-events: auto;

    &::after {
      opacity: 1;
      right: 6%;
    }
  }
}
</style>
