<template>
  <div class="persona-section" :class="{ hide: stage !== 'guide' }">
    <BackButton
      backStage="init"
      direction="back"
      :loadMedia="loadMedia"
      v-on:stage-change="$emit('stage-change', $event)"
    />
    <div class="mobileOnly">
      <BackButton
        direction="next"
        backStage="video"
        :loadMedia="loadMedia"
        v-on:stage-change="$emit('stage-change', $event)"
      />
    </div>

    <div class="guide-image-container">
      <GuideImage :loadImage="loadImage" :img="img" :guide="guide" />
    </div>

    <div class="guide-media-container">
      <GuidePerson :loadMedia="loadMedia" :guide="guide" />
      <MainQuote :loadMedia="loadMedia" :mainQuote="mainQuote" />
      <VideoButton
        :loadMedia="loadMedia"
        v-on:stage-change="$emit('stage-change', 'video')"
      />
    </div>
  </div>
</template>

<script>
import GuidePerson from './GuidePerson';
import GuideImage from './GuideImage';
import MainQuote from './MainQuote';
import VideoButton from './VideoButton';
import BackButton from '../../../BackButton';

export default {
  name: 'PersonaSection',
  props: ['stage', 'loadImage', 'loadMedia', 'img', 'guide', 'mainQuote'],

  components: {
    GuidePerson,
    GuideImage,
    MainQuote,
    VideoButton,
    BackButton,
  },
};
</script>

<style lang="scss" scoped>
.persona-section {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 1;
  transition: opacity 0.3s linear 0.2s;

  @media (min-width: $tablet) {
    flex-direction: row;
  }

  &.hide {
    opacity: 0;
  }
}

.guide-image-container {
  position: relative;
  text-align: center;
  margin-top: 25px;
  flex-basis: 30%;

  @media (min-width: $mobileL) {
    flex-basis: 50%;
  }

  @media (min-width: $tablet) {
    margin-top: unset;
  }
}

.guide-media-container {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 20px 10px;

  @media (min-width: $tablet) {
    padding: unset;
  }

  & > .guide,
  & > .quote,
  & > .video-navigation {
    transform: translateX(-50px);
    opacity: 0;
    transition: all 0.3s ease;
    &.appear {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

.mobileOnly {
  display: inline-block;
  @media (min-width: $tablet) {
    display: none;
  }
}
</style>
