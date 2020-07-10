<template>
  <div class="main-wrapper">
    GELLO THERO
    <router-link to="/">Todo Room</router-link>
    <SelectOption v-if="step === 1" />;
  </div>
</template>

<script>
import SelectOption from '../components/motivationRoom/step1/SelectOption';

export default {
  name: 'MotivationRoom',
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    // renderStep() {
    //   switch (this.step) {
    //     case 1:
    //       return <SelectOption />;
    //   }
    // },

    addStep() {
      this.step++;
    },
  },

  components: {
    SelectOption,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  position: relative;
  height: 100vh;
}
</style>
