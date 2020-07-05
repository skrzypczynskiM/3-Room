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
  width: 100%;
  font-size: 40px;
  font-weight: 600;
  color: #3d405f;
  letter-spacing: 1.3px;
  padding: 35px 0 25px 30px;
}
</style>
