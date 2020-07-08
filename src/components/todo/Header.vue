<template>
  <header><slot name="header">My Day</slot></header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
header {
  display: inline-block;
  font-size: 50px;
  font-weight: 600;
  color: #ff8a54;
  letter-spacing: 1.3px;
  /* padding: 35px 0 25px 30px; */
  padding: 10px 0 35px 30px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  @media (min-width: $mobileM) {
    font-size: 58px;
    padding-left: 0;
  }

  @media (min-width: $tablet) {
    font-size: 65px;
    /* test */
    padding: 0px 0 55px 40px;
  }
}
</style>
