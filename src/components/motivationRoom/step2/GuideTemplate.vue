<template>
  <div class="container border-animation__inner">
    <div class="persona-section" :class="{ hide: videoClicked }">
      <div class="guide-image-container">
        <img
          src="../../../assets/motivationRoom/guides/will-smith.png"
          alt="Will Smith"
          :class="{ appear: loadImage }"
        />
      </div>
      <div class="guide-media-container">
        <h3 class="guide" :class="{ appear: loadMedia }">Will Smith</h3>
        <p class="quote" :class="{ appear: loadMedia }">
          “I don’t know what my calling is, but I want to be here for a bigger
          reason. I strive to be like the greatest people who have ever lived.”
        </p>
        <a
          class="video-navigation"
          :class="{ appear: loadMedia }"
          v-on:click="toggleVideo"
        >
          <TvIcon />
          <PlayIcon />
        </a>
      </div>
    </div>

    <div class="video-section" :class="{ appear: videoClicked }">
      <span class="back" v-on:click="toggleVideo"><BackIcon /></span>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/ft_DXwgUXB0?start=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p class="moreMotivation" :class="{ appear: loadMoreMotivation }">
        Need more motivation
      </p>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../../../../icons/Play';
import TvIcon from '../../../../icons/Tv';
import BackIcon from '../../../../icons/Back';

export default {
  name: 'GuideTempalte',
  props: ['loadImage', 'loadMedia'],
  data() {
    return {
      videoClicked: false,
      videoState: 'init',
    };
  },

  methods: {
    toggleVideo() {
      console.log('clicked!');

      this.videoClicked = !this.videoClicked;
    },

    toggleVideoState() {
      if (this.videoState === 'init') this.videoState = 'start';
      else if (this.videoState === 'start') this.videoState = 'stop';
      else if (this.videoState === 'stop') return;
    },
  },
  computed: {
    loadMoreMotivation() {
      if (this.videoState === 'stop') return true;
      else return false;
    },
  },

  components: {
    PlayIcon,
    TvIcon,
    BackIcon,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: inline-block;
  height: 450px;
  width: 200px;
  background: rgba(50, 50, 50, 0.5);
  z-index: 1;
  padding: 0.2em;
  border: solid 0.3em transparent;
}

.persona-section {
  position: relative;
  display: flex;
  opacity: 1;
  transition: opacity 0.3s linear 0.2s;
  /* transition-delay: all 1s; */

  &.hide {
    opacity: 0;
  }
}

.guide-image-container {
  flex-basis: 50%;

  & > img {
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s;
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
    font-size: 61px;
    font-weight: 700;
    color: #c3073f;
    color: #c51046;
  }

  & > .quote {
    color: #950740;
    color: #c3073f;
    color: #e8215c;
    color: #ff5185;
    font-size: 27px;
  }

  & > .video-navigation {
    position: relative;
    width: 150px;
    height: 150px;
    cursor: pointer;
    margin: 0 auto;

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
      /* &:hover {
        fill: lighten(#e50914, 10%);
      } */
    }
    & > svg:last-child {
      fill: #ef5482;
      position: absolute;
      width: 30%;
      height: 30%;
      /* top: 45%;
      left: 50%;
      transform: translate(-50%, -45%); */
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
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;

  &.appear {
    transform: translateX(0);
    opacity: 1;
  }

  & > .back {
    position: absolute;
    top: 15px;
    left: 15px;

    & > svg {
      width: 50px;
      height: 50px;
      fill: #fff;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        fill: #ef5482;
      }
    }
  }

  & > .video-container {
    width: 60%;
    height: 75%;
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.75);

    & > iframe {
      height: 100%;
      width: 100%;
    }
  }

  & .moreMotivation {
    font-size: 21px;
    color: white;
    transform: translateY(20px);
    opacity: 0;

    transition: all 0.3s;

    &.appear {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
