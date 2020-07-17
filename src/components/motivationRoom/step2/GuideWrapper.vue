<template>
  <div class="container">
    <a class="border-animation" :class="{ mounted: pageLoaded }">
      <GuideTemplate :loadImage="loadImage" :loadMedia="loadMedia" />
    </a>
  </div>
</template>

<script>
import GuideTemplate from './GuideTemplate';

export default {
  name: 'AnimationWrapper',
  props: ['guidePresented'],
  data() {
    return {
      loadImage: false,
      pageLoaded: false,
      loadMedia: false,
    };
  },
  components: { GuideTemplate },
  mounted() {
    setTimeout(() => (this.pageLoaded = true), 1100);
    setTimeout(() => (this.loadImage = true), 2100);
    setTimeout(() => (this.loadMedia = true), 2400);
  },
};
</script>

<style lang="scss" scoped>
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
    background: #555;
    background: #353839;
    text-shadow: 0 0.1em 0.1em #111;
  }
}
</style>
