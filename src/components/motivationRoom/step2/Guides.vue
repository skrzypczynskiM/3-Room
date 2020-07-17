<template>
  <div class="step-2-wrapper">
    <h3 class="title">
      To help you get back on track with
      <span class="desire"> {{ desire }}</span>
    </h3>
    <div class="guide-container">
      <GuideWrapper :guidePresented="guidePresented" />
    </div>
  </div>
</template>

<script>
import GuideWrapper from './GuideWrapper';

export default {
  name: 'Guide',
  props: ['desire'],
  data() {
    return {
      guidePresented: false,
    };
  },

  computed: {
    getGuide() {
      if (this.desire === 'Ambition') return 'Eric Thomas';
      else if (this.desire === 'Courage') return 'Eric Thomas';
      else if (this.desire === 'Empathy') return 'Simon Sinek';
      else if (this.desire === 'Purpose') return 'Jay Shetty';
      else if (this.desire === 'Discipline') return 'Will Smith';
      else if (this.desire === 'Passion') return 'Eric Thomas';
      else return 'dupa';
    },

    getTitle() {
      return `To help you get back on track with ${this.desire.toUpperCase()}`;
    },
  },
  methods: {
    toggleView() {
      this.guidePresented = !this.guidePresented;
    },
  },

  components: {
    GuideWrapper,
  },
};
</script>

<style lang="scss" scoped>
.step-2-wrapper {
  background-color: #ff6f69;
  background: #1a1a1d;
}

.title {
  font-size: 43px;
  color: black;
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  color: #fff;
  color: #ef548287;
  align-items: baseline;
  & > .desire {
    /* color: #ef5482; */
    /* color: #ef548287; */
    color: #c51046;
    font-weight: 800;
    font-size: 47px;
    padding-bottom: 4px;
    padding-right: 10px;
    /* border-bottom: 1px solid #ef5482; */
    border-bottom: 1px solid #ff2a69;

    &::before {
      content: ' ';
      display: inline-block;
    }
  }

  & > .guide {
  }
}

.guide-container {
  width: 80%;
  margin: auto;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
