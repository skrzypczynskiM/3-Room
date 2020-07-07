<template>
  <radial-progress-bar
    :diameter="selectGraphSize"
    :completed-steps="completedTasks"
    :total-steps="allTasks"
    :animateSpeed="500"
    startColor="#42a942"
    stopColor="#33fb33"
    innerStrokeColor="#C8C8C8"
    :fps="320"
  >
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
      currentScreenWidth: 0,
    };
  },
  props: ['allTasks', 'completedTasks', 'isDayComplete', 'top-priority-todo'],

  computed: {
    getPercent() {
      if (this.allTasks > 0)
        return Math.floor((this.completedTasks * 100) / this.allTasks);
      else return 0;
    },

    selectGraphSize() {
      if (this.currentScreenWidth <= 360) return 100;
      else if (this.currentScreenWidth <= 425) return 130;
      else if (this.currentScreenWidth <= 645) return 140;
      else if (this.currentScreenWidth <= 768) return 170;
      else return 175;
    },
  },

  methods: {
    handleResize() {
      this.currentScreenWidth = window.innerWidth;
    },
  },

  components: {
    RadialProgressBar,
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
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

  @media (min-width: $mobileL) {
    font-size: 14px;
  }
  @media (min-width: $tablet) {
    font-size: 16px;
  }

  @media (min-width: $laptop) {
    font-size: 17px;
  }
}

.inner-number {
  letter-spacing: 1px;
  font-weight: 700;
  display: block;
  font-size: 13px;
  text-align: center;

  @media (min-width: $mobileM) {
    font-size: 15px;
  }
  @media (min-width: $tablet) {
    font-size: 20px;
  }
}

.percent {
  font-size: 25px;
  position: relative;
  font-weight: 600;

  @media (min-width: $mobileM) {
    font-size: 33px;
  }

  @media (min-width: $mobileL) {
    font-size: 37px;
  }

  @media (min-width: $tablet) {
    font-size: 50px;
  }

  &::after {
    content: '\%';
    font-size: 13px;
    position: absolute;
    right: -40%;
    right: -12px;
    top: 0;

    @media (min-width: $mobileL) {
      font-size: 18px;
      right: -17px;
    }

    @media (min-width: $tablet) {
      font-size: 22px;
      right: -20px;
    }

    @media (min-width: $laptop) {
      top: 7px;
      right: -18px;
    }
  }
}
</style>
