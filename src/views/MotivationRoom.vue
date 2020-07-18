<template>
  <div class="main-wrapper">
    <!-- GELLO THERO -->
    <!-- <router-link to="/">Todo Room</router-link> -->
    <transition name="slide-page">
      <SelectOption
        v-if="step === 1"
        v-on:nextStep="addStep"
        :setDesire="setDesire"
        :desire="desire"
        v-on:selectedDesire="setDesire"
      />;
      <!-- <transition name="right-slide-page"> -->
      <Guides v-if="step === 2" v-on:nextStep="addStep" :desire="desire" />
      <!-- </transition> -->
    </transition>
  </div>
</template>

<script>
import SelectOption from '../components/motivationRoom/step1/SelectOption';
import Guides from '../components/motivationRoom/step2/Guides';

export default {
  name: 'MotivationRoom',
  data() {
    return {
      step: 1,
      desire: '',
    };
  },
  methods: {
    addStep() {
      this.step++;
    },

    setDesire(selectedDesire) {
      this.desire = selectedDesire;
    },
  },

  components: {
    SelectOption,
    Guides,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  position: relative;
  height: 100%;
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

/* .right-slide-page-enter-active
.right-slide-page--leave-active 
 {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.right-slide-page-enter,
.right-slide-page-leave-active {
  opacity: 0;
} */
</style>
