<template>
  <div class="add-item" v-on:click="toggleNewTodo">
    {{ createNewTodo ? '-' : '+' }}
  </div>
</template>

<script>
export default {
  name: 'TodoDelete',
  props: ['toggleNewTodo', 'createNewTodo'],
};
</script>

<style lang="scss" scoped>
.add-item {
  position: absolute;
  top: 3%;
  right: 3%;
  border-radius: 50%;
  border: 1px solid #909090;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #696969;
  cursor: pointer;
  transition: all 0.3s;

  @media (min-width: $laptop) {
    top: 10%;
    border: 2px solid #909090;
    width: 30px;
    height: 30px;
    font-size: 24px;
  }

  &:hover {
    border: 1px solid darken(#909090, 20%);
    color: darken(#696969, 20%);

    @media (min-width: $laptop) {
      border: 2px solid darken(#909090, 20%);
    }
  }
}
</style>
