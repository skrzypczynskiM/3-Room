<template>
  <radial-progress-bar
    :diameter="100"
    :completed-steps="completedTasks"
    :total-steps="allTasks"
    :animateSpeed="500"
    startColor="#42a942"
    stopColor="#33fb33"
    innerStrokeColor="#C8C8C8"
    :fps="320"
  >
    <!-- <div v-if="isDayComplete" class="inner-text-container"> -->
    <!--    
      <p class="inner-text">Congrats!</p>

      <p class="inner-text">All tasks done</p> -->
    <!-- </div> -->
    <div class="inner-text-container">
      <div>
        <p class="percent">
          {{ getPercent }}

          <span v-if="isDayComplete" class="inner-text">Well done!</span>
          <span v-else class="inner-number"
            >{{ completedTasks }}/{{ allTasks }}</span
          >
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
  props: ['allTasks', 'completedTasks', 'isDayComplete', 'top-priority-todo'],

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
  font-size: 10px;
  font-weight: 700;
  display: block;

  /* &:last-child {
    font-size: 13px;
    margin-top: 5px;
    font-weight: 600;
  } */
}

.inner-number {
  /* margin-top: 5px; */
  letter-spacing: 1px;
  font-weight: 700;
  display: block;
  font-size: 13px;
  text-align: center;
}

.percent {
  /* font-size: 34px; */
  font-size: 25px;

  position: relative;
  font-weight: 600;

  /* &.complete {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 5px;
  } */

  &::after {
    content: '\%';
    /* font-size: 18px; */
    font-size: 13px;

    position: absolute;
    /* right: -50%; */
    /* right: 17%; */
    right: -40%;
    right: -12px;
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
