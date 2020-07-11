<template>
  <div class="main-wrapper">
    <!-- GELLO THERO -->
    <!-- <router-link to="/">Todo Room</router-link> -->
    <transition name="slide-page">
      <SelectOption v-if="step === 1" v-on:nextStep="addStep" />;
    </transition>
    <Guides v-if="step === 2" v-on:nextStep="addStep" />
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
  transform: translate(-100%);
  transition: transform 0.3s ease;
}

.slide-page-leave {
  transform: translate(0);
}
</style>
