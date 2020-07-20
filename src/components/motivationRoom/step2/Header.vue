<template>
  <h3 class="title">
    To help you get back on track with
    <span class="desire"> {{ desire }}</span>
  </h3>
</template>

<script>
export default {
  name: 'MotivationHeader',
  props: ['desire'],
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  padding: 40px 10% 12px;
  color: #ef548287;

  white-space: wrap;

  @media (min-width: $mobileM) {
    font-size: 30px;
  }

  @media (min-width: $mobileL) {
    font-size: 35px;
  }

  @media (min-width: $tablet) {
    display: flex;
    justify-content: center;
    font-size: 43px;
    align-items: baseline;
    white-space: nowrap;
    padding: 20px 0 0;
  }
  & > .desire {
    color: #c51046;
    font-weight: 800;
    font-size: 35px;
    padding-bottom: 4px;
    padding-right: 10px;
    padding-top: 8px;
    border-bottom: 1px solid #ff2a69;

    @media (min-width: $mobileM) {
      font-size: 42px;
    }

    @media (min-width: $mobileL) {
      font-size: 47px;
    }

    &::before {
      content: ' ';
      display: inline-block;
    }
  }
}
</style>
