<template>
  <div class="step-2-wrapper">
    <Header :desire="desire" />
    <div class="guide-wrapper">
      <div class="container">
        <a class="border-animation" :class="{ mounted: pageLoaded }">
          <Guide
            :loadImage="loadImage"
            :loadMedia="loadMedia"
            :stage="stage"
            :desireData="getDesireData(desire)"
            v-on:stage-change="$emit('stage-change', $event)"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Guide from './guide/Guide';

import { desiresData } from './desireData';

export default {
  name: 'GuideWrapper',
  props: ['desire', 'stage'],
  data() {
    return {
      loadImage: false,
      pageLoaded: false,
      loadMedia: false,
    };
  },

  methods: {
    getDesireData(desire) {
      const desireValue = desire.toLowerCase();
      return desiresData[desireValue];
    },
  },

  components: {
    Header,
    Guide,
  },

  mounted() {
    setTimeout(() => (this.pageLoaded = true), 1100);
    setTimeout(() => (this.loadImage = true), 2100);
    setTimeout(() => (this.loadMedia = true), 2400);
  },
};
</script>

<style lang="scss" scoped>
.step-2-wrapper {
  background: #1a1a1d;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #1a1a1d;
}

.guide-wrapper {
  width: 80%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.container {
  width: 100%;
  height: 100%;
  background: #1a1a1d;
  position: relative;
}

.border-animation {
  --border-width: 3px;
  --animation-speed: 1s;
  --color: #ffffff;
  color: var(--color);
  width: 100%;
  height: 80%;
  position: relative;
  display: inline-block;
  transform: scale(1, 0.8);
  border: var(--border-width) solid transparent;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: var(--color);
  }

  &.mounted:before {
    animation: beforeBorders var(--animation-speed) forwards ease-in-out;
  }

  &.mounted:after {
    animation: afterBorders var(--animation-speed) forwards ease-in-out;
  }

  &.mounted {
    animation: borderColors var(--animation-speed) steps(1) forwards;
    outline: none;

    & .border-animation__inner {
      animation: background calc(var(--animation-speed) / 5 * 3) forwards
        ease-in-out;
      animation-delay: calc(var(--animation-speed) / 5 * 2);
    }
  }
}

@keyframes beforeBorders {
  0% {
    top: calc(var(--border-width) * -1);
    left: 50%;
    bottom: auto;
    right: auto;
    width: 0;
    height: var(--border-width);
  }
  33% {
    top: calc(var(--border-width) * -1);
    left: calc(var(--border-width) * -1);
    bottom: auto;
    right: auto;
    width: calc(var(--border-width) + 50%);
    height: var(--border-width);
  }
  66% {
    top: calc(var(--border-width) * -1);
    left: calc(var(--border-width) * -1);
    bottom: auto;
    right: auto;
    width: var(--border-width);
    height: calc((var(--border-width) * 2) + 100%);
  }
  100% {
    top: auto;
    left: calc(var(--border-width) * -1);
    bottom: calc(var(--border-width) * -1);
    right: auto;
    width: calc(var(--border-width) + 50%);
    height: calc((var(--border-width) * 2) + 100%);
  }
}

@keyframes afterBorders {
  0% {
    top: calc(var(--border-width) * -1);
    left: auto;
    bottom: auto;
    right: 50%;
    width: 0;
    height: var(--border-width);
  }
  33% {
    top: calc(var(--border-width) * -1);
    left: auto;
    bottom: auto;
    right: calc(var(--border-width) * -1);
    width: calc(var(--border-width) + 50%);
    height: var(--border-width);
  }
  66% {
    top: calc(var(--border-width) * -1);
    left: auto;
    bottom: auto;
    right: calc(var(--border-width) * -1);
    width: var(--border-width);
    height: calc((var(--border-width) * 2) + 100%);
  }
  100% {
    top: auto;
    left: auto;
    bottom: calc(var(--border-width) * -1);
    right: calc(var(--border-width) * -1);
    width: calc(var(--border-width) + 50%);
    height: calc((var(--border-width) * 2) + 100%);
  }
}

@keyframes borderColors {
  0% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  33% {
    border-top-color: var(--color);
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  66% {
    border-top-color: var(--color);
    border-right-color: var(--color);
    border-bottom-color: transparent;
    border-left-color: var(--color);
  }
  100% {
    border-top-color: var(--color);
    border-right-color: var(--color);
    border-bottom-color: var(--color);
    border-left-color: var(--color);
  }
}

@keyframes background {
  to {
    background: #353839;
    text-shadow: 0 0.1em 0.1em #111;
  }
}
</style>
