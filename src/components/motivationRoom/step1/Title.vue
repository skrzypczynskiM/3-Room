<template>
  <h3 class="question"><slot>What do you need the most now?</slot></h3>
</template>

<script>
export default {
  name: 'Title',
};
</script>

<style lang="scss" scoped>
.question {
  font-size: 39px;
  color: #ff5185;
  padding: 10px 15px 30px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  @media (min-width: $mobileM) {
    font-size: 41px;
    padding-bottom: 35px;
  }
  @media (min-width: $mobileL) {
    font-size: 45px;
    padding-bottom: 40px;
  }

  @media (min-width: $laptop) {
    font-size: 55px;
    padding-bottom: 20px;
  }

  @media (min-width: $laptopL) {
    font-size: 55px;
    padding-bottom: 40px;
  }
}
</style>
