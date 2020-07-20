<template>
  <div class="persona-section" :class="{ hide: stage !== 'guide' }">
    <BackButton
      backStage="init"
      :loadMedia="loadMedia"
      v-on:stage-change="$emit('stage-change', $event)"
    />
    <div class="guide-image-container">
      <img :src="getImgUrl(img)" :alt="guide" :class="{ appear: loadImage }" />
    </div>

    <div class="guide-media-container">
      <h3 class="guide" :class="{ appear: loadMedia }">
        {{ guide }}
      </h3>
      <p class="quote" :class="{ appear: loadMedia }">
        {{ mainQuote }}
      </p>
      <a
        class="video-navigation"
        :class="{ appear: loadMedia }"
        v-on:click="$emit('stage-change', 'video')"
      >
        <TvIcon />
        <PlayIcon />
      </a>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../../../../../icons/Play';
import TvIcon from '../../../../../icons/Tv';
import BackButton from '../../BackButton';

export default {
  name: 'PersonaSection',
  props: [
    'stage',
    'loadImage',
    'loadMedia',
    'videoClicked',
    'img',
    'guide',
    'mainQuote',
  ],
  methods: {
    getImgUrl(pic) {
      return require('../../../../assets/motivationRoom/guides/' + pic);
    },
  },
  components: {
    PlayIcon,
    TvIcon,
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
  flex-basis: 50%;
  position: relative;
  text-align: center;
  margin-top: 25px;

  @media (min-width: $tablet) {
    margin-top: unset;
  }
  & > img {
    opacity: 0;
    transform: scale(0);
    width: 80%;
    height: 95%;
    filter: grayscale(1) brightness(1.2) contrast(150%);
    transition: all 0.3s;

    @media (min-width: $tablet) {
      width: 70%;
    }
    &.appear {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.guide-media-container {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  /* padding: 20px 35px; */
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

  & > .guide {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #c51046;

    @media (min-width: $mobileL) {
      font-size: 39px;
    }

    @media (min-width: $tablet) {
      font-size: 61px;
      margin-bottom: unset;
    }
  }

  & > .quote {
    color: #ff5185;
    font-size: 19px;
    line-height: 1.5;

    @media (min-width: $mobileL) {
      font-size: 23px;
      line-height: 1.4;
    }

    @media (min-width: $tablet) {
      line-height: 1.3;
      font-size: 27px;
    }
  }

  & > .video-navigation {
    position: relative;

    cursor: pointer;
    margin: 0 auto;
    width: 95px;
    height: 150px;
    margin-bottom: 10px;

    @media (min-width: $mobileL) {
      width: 110px;
    }

    @media (min-width: $tablet) {
      width: 150px;
      height: 150px;
      margin-bottom: unset;
    }

    &:hover > svg:first-child {
      fill: lighten(#e50914, 10%);
    }

    &:hover > svg:last-child {
      fill: #e50914;
    }

    & > svg:first-child {
      fill: #ef5482;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
    }
    & > svg:last-child {
      fill: #ef5482;
      position: absolute;
      width: 30%;
      height: 30%;
      top: 30%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
}
</style>
