<template>
  <header><slot name="header">My Day</slot></header>
</template>

<script>
export default {
  name: 'Header',
  // props: ['']
};
</script>

<style lang="scss" scoped>
header {
  /* width: 100%; */
  display: inline-block;
  font-size: 58px;
  font-weight: 600;
  color: #3d405f;
  color: #ff8a54;
  letter-spacing: 1.3px;
  padding: 35px 0 25px 30px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
}
</style>
