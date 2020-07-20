<template>
  <div class="main-wrapper">
    <transition name="slide-page">
      <SelectDesire
        v-if="step === 1"
        v-on:next-step="addStep"
        v-on:stage-change="setStage($event)"
        :setDesire="setDesire"
        :desire="desire"
        :stage="stage"
        v-on:selected-desire="setDesire"
      />
      <Desire
        v-if="step === 2"
        :desire="desire"
        :stage="stage"
        v-on:stage-change="setStage($event)"
      />
    </transition>
  </div>
</template>

<script>
import SelectDesire from '../components/motivationRoom/step1/SelectDesire';
import Desire from '../components/motivationRoom/step2/Desire';

export default {
  name: 'MotivationRoom',
  data() {
    return {
      step: 1,
      desire: '',
      stage: 'init',
    };
  },
  methods: {
    addStep() {
      this.step++;
    },

    backStep() {
      this.step--;
    },

    setDesire(selectedDesire) {
      this.desire = selectedDesire;
    },

    setStage(stage) {
      if (stage === 'init') this.backStep();

      this.stage = stage;
    },
  },

  components: {
    SelectDesire,
    Desire,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  position: relative;
  height: 100%;
  background: #353839;
}

.slide-page-leave-active {
  transition: all 1s ease;
  opacity: 0;
  transform: translateX(-100%);
}

.slide-page-enter-active {
  transform: translateX(0);
  transition: all 1.1s ease-out;
  opacity: 1;
}

.slide-page-enter {
  transform: translateX(100%);

  opacity: 0;
}

.slide-page-leave {
  opacity: 1;
  transform: translateX(0);
}

/*  */

.right-slide-page-enter-active {
  transition: all 7s ease;
  opacity: 1;
}

.right-slide-page-enter {
  opacity: 0;
}
</style>
