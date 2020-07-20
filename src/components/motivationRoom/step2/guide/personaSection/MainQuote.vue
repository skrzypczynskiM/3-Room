<template>
  <p class="quote" :class="{ appear: loadMedia }">
    <slot>{{ mainQuote }}</slot>
  </p>
</template>

<script>
export default {
  name: 'mainQuote',
  props: ['loadMedia', 'mainQuote'],
};
</script>

<style lang="scss" scoped>
.quote {
  color: #ff5185;
  font-size: 15px;
  line-height: 1.5;
  font-style: italic;

  @media (min-width: $mobileM) {
    font-size: 18px;
    line-height: 1.4;
  }

  @media (min-width: $mobileL) {
    font-size: 23px;
    line-height: 1.4;
  }

  @media (min-width: $tablet) {
    line-height: 1.3;
    font-size: 27px;
  }

  @media (min-width: $laptop) {
    padding-right: 20px;
    line-height: 1.3;
    font-size: 32px;
  }
  @media (min-width: $laptopL) {
    line-height: 1.3;
    font-size: 35px;
  }
}
</style>
