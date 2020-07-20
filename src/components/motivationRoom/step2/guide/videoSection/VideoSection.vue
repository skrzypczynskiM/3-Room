<template>
  <div class="video-section" :class="classObject">
    <VideoHeader :guide="guide" />
    <BackButton
      direction="back"
      loadMedia="loadMedia"
      backStage="guide"
      v-on:stage-change="$emit('stage-change', $event)"
    />

    <BackButton
      direction="next"
      loadMedia="loadMedia"
      backStage="quotes"
      v-on:stage-change="$emit('stage-change', $event)"
    />

    <div class="video-container">
      <iframe
        :src="url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <span class="placeholder"></span>
  </div>
</template>

<script>
import VideoHeader from './VideoHeader';

import BackButton from '../../../BackButton';

export default {
  name: 'VideoSection',
  props: ['videoClicked', 'moveToQuotes', 'url', 'stage', 'guide', 'loadMedia'],
  data() {
    return {
      showButton: false,
      hideDirection: '',
    };
  },

  watch: {
    stage: function(newVal, oldVal) {
      console.log(oldVal);
      console.log('hey: ', newVal, oldVal);
      if (oldVal === 'video') {
        if (newVal === 'quotes') this.hideDirection = 'left';
        else if (newVal === 'guide') this.hideDirection = 'right';
      }
    },
  },

  computed: {
    classObject: function() {
      return {
        appear: this.stage === 'video',
        'hide-left': this.stage !== 'video' && this.hideDirection === 'left',
        'hide-right': this.stage !== 'video' && this.hideDirection === 'right',
      };
    },
  },

  mounted() {
    setTimeout(() => (this.showButton = !this.showButton), 10000);
  },
  components: {
    VideoHeader,
    BackButton,
  },
};
</script>

<style lang="scss" scoped>
.video-section {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateX(100%);
  opacity: 0;
  background: rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.8s ease;

  @media (min-width: $laptop) {
    justify-content: center;
  }

  &.appear {
    transform: translateX(0);
    opacity: 1;
  }
  &.hide-left {
    opacity: 0;
    transform: translateX(-100%);
  }

  &.hide-right {
    opacity: 0;
    transform: translateX(100%);
  }

  & > .video-container {
    width: 90%;
    height: 30%;
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);
    @media (min-width: $tablet) {
      width: 60%;
      height: 75%;
    }

    & > iframe {
      height: 100%;
      width: 100%;
    }
  }
}
.placeholder {
  visibility: hidden;
}
</style>
