<template>
  <h3 class="guide" :class="{ appear: loadMedia }">
    <slot>{{ guide }}</slot>
  </h3>
</template>

<script>
export default {
  name: 'GuidePerson',
  props: ['loadMedia', 'guide'],
};
</script>

<style lang="scss" scoped>
.guide {
  font-size: 30px;

  font-weight: 700;
  color: #c51046;

  @media (min-width: $mobileM) {
    font-size: 39px;
    margin-bottom: 20px;
  }

  @media (min-width: $mobileL) {
    font-size: 39px;
  }

  @media (min-width: $tablet) {
    font-size: 61px;
    margin-bottom: unset;
  }

  @media (min-width: $laptop) {
    padding-right: 20px;
  }
}
</style>
