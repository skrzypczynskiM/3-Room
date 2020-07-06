<template>
  <radial-progress-bar
    :diameter="150"
    :completed-steps="completedTasks"
    :total-steps="allTasks"
    :animateSpeed="500"
    startColor="#42a942"
    stopColor="#33fb33"
    innerStrokeColor="#C8C8C8"
    fps="320"
  >
    <!-- <p>Total tasks: {{ allTasks }}</p> -->
    <div v-if="isDayComplete" class="inner-text-container">
      <!-- <p class="percent complete">{{ getPercent }}</p> -->
      <p class="inner-text">Congrats!</p>

      <p class="inner-text">All tasks done</p>
    </div>
    <div v-else class="inner-text-container">
      <div>
        <p class="percent">
          {{ getPercent }}
          <!-- <span>%</span> -->
          <span class="inner-number">{{ completedTasks }}/{{ allTasks }}</span>
        </p>
      </div>
    </div>
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';

export default {
  data() {
    return {
      allTasksDone: false,
    };
  },
  props: ['allTasks', 'completedTasks', 'isDayComplete'],

  computed: {
    getPercent() {
      if (this.allTasks > 0)
        return Math.floor((this.completedTasks * 100) / this.allTasks);
      else return 0;
    },
  },

  components: {
    RadialProgressBar,
  },
};
</script>

<style lang="scss" scoped>
.inner-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner-text {
  font-size: 18px;
  font-weight: 700;

  &:last-child {
    font-size: 13px;
    margin-top: 5px;
    font-weight: 600;
  }
}

.inner-number {
  /* margin-top: 5px; */
  letter-spacing: 1px;
  font-weight: 700;
  display: block;
  font-size: 14px;
  text-align: center;
}

.percent {
  font-size: 34px;
  position: relative;
  font-weight: 600;

  /* &.complete {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 5px;
  } */

  &::after {
    content: '\%';
    font-size: 18px;
    position: absolute;
    right: -50%;
    top: 0;
  }
  /* & > span {
    font-size: 18px;
    position: relative;
    top: -10px;
    left: -5px;
  } */
}
</style>
