<template>
  <section class="guru-section">
    <div class="guru-container"></div>
  </section>
</template>

<script>
import GuruItem from './guruItem/GuruItem';

export default {};
</script>

<style lang="scss" scoped>
.guru-section {
  width: 95%;
  margin: 20px 10px;
}

.guru-container {
  display: flex;
  justify-content: space-around;
}
</style>
