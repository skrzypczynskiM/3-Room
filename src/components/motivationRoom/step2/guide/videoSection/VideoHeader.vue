<template>
  <h3 class="video-header">{{ guide }}</h3>
</template>

<script>
export default {
  name: 'VideoHeader',
  props: ['guide'],
};
</script>

<style lang="scss" scoped>
.video-header {
  font-size: 38px;
  color: #ff5185;
  text-align: left;
  padding-left: 25px;
  line-height: 1.2;
  word-spacing: 100vw;

  @media (min-width: $mobileM) {
    font-size: 45px;
  }

  @media (min-width: $laptop) {
    display: none;
  }
}
</style>
