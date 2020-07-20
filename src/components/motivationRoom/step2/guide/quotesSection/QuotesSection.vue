<template>
  <div
    class="quotes-section"
    :class="{ appear: stage === 'quotes', hide: stage !== 'quotes' }"
  >
    <BackButton
      backStage="video"
      loadMedia="loadMedia"
      direction="back"
      v-on:stage-change="$emit('stage-change', $event)"
    />
    <QuotesCarousel :quotes="quotes" />
    <router-link to="/">
      <PulsingButton :showButton="showButton" />
    </router-link>
  </div>
</template>

<script>
import QuotesCarousel from './QuotesCarousel';
import BackButton from '../../../BackButton';
import PulsingButton from './PulsingButton';

export default {
  name: 'QuotesSection',
  props: ['moveToQuotes', 'quotes', 'stage', 'loadMedia'],
  data() {
    return {
      showButton: false,
    };
  },
  components: {
    QuotesCarousel,
    BackButton,
    PulsingButton,
  },

  mounted() {
    setTimeout(() => (this.showButton = !this.showButton), 10000);
  },
};
</script>

<style lang="scss" scoped>
.quotes-section {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateX(100%);
  opacity: 0;
  background: rgba(50, 50, 50, 0.5);
  z-index: -1;

  transition: all 0.8s ease;

  &.appear {
    z-index: 0;
    transform: translateX(0);
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }
}
</style>
