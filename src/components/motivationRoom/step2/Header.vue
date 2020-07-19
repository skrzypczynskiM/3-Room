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
  font-size: 43px;
  color: black;
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  color: #fff;
  color: #ef548287;
  align-items: baseline;
  white-space: nowrap;
  & > .desire {
    color: #c51046;
    font-weight: 800;
    font-size: 47px;
    padding-bottom: 4px;
    padding-right: 10px;
    border-bottom: 1px solid #ff2a69;

    &::before {
      content: ' ';
      display: inline-block;
    }
  }
}
</style>
