<template>
  <div class="container border-animation__inner">
    <div class="persona-section" :class="{ hide: videoClicked }">
      <div class="guide-image-container">
        <img
          src="../../../assets/motivationRoom/guides/robbins.png"
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

    <div
      class="video-section"
      :class="{ appear: videoClicked, hide: moveToQuotes }"
    >
      <span class="back" v-on:click="toggleVideo"><BackIcon /></span>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/ft_DXwgUXB0?start=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button
        class="moreMotivation"
        :class="{ appear: showQuestion }"
        v-on:click="toggleNextStep"
      >
        Cement your motivation
      </button>
    </div>

    <div class="quotes-section" :class="{ appear: moveToQuotes }">
      <QuotesCarousel />
      <router-link to="/">
        <button class="pulsingButton">Let's get back to work!</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../../../../icons/Play';
import TvIcon from '../../../../icons/Tv';
import BackIcon from '../../../../icons/Back';

import QuotesCarousel from './QuotesCarousel';

export default {
  name: 'GuideTempalte',
  props: ['loadImage', 'loadMedia'],
  data() {
    return {
      videoClicked: false,
      showQuestion: false,
      moveToQuotes: false,
    };
  },

  methods: {
    toggleVideo() {
      this.videoClicked = !this.videoClicked;
    },

    toggleNextStep() {
      this.moveToQuotes = !this.moveToQuotes;
    },
  },

  mounted() {
    setTimeout(() => (this.showQuestion = !this.showQuestion), 10000);
  },

  computed: {
    loadMoreMotivation() {
      return this.showQuestion;
    },
  },

  components: {
    PlayIcon,
    TvIcon,
    BackIcon,
    QuotesCarousel,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: inline-block;
  /* height: 900px; */
  width: 200px;
  background: rgba(50, 50, 50, 0.5);
  z-index: 1;
  padding: 0.2em;
  border: solid 0.3em transparent;
}

.persona-section {
  position: relative;
  display: flex;
  height: 100%;
  opacity: 1;
  transition: opacity 0.3s linear 0.2s;
  /* transition-delay: all 1s; */

  &.hide {
    opacity: 0;
  }
}

.guide-image-container {
  flex-basis: 50%;
  position: relative;
  text-align: center;

  /* padding: 50px 20px; */

  & > img {
    opacity: 0;
    transform: scale(0);
    width: 80%;
    height: 95%;
    /* filter: contrast(150%); */
    /* filter: grayscale(100%); */
    filter: grayscale(1) brightness(1.2) contrast(150%);

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
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;

  &.appear {
    transform: translateX(0);
    opacity: 1;
  }

  &.hide {
    opacity: 0;
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
    position: absolute;
    bottom: 35px;
    right: 35px;
    padding: 8px 12px;
    font-weight: 600;
    width: 160px;
    font-size: 18px;
    color: white;
    border: 2px solid transparent;
    border: 2px solid #c51046;
    background: black;
    background: #1a1a1d;
    background: #c51046;
    cursor: pointer;

    transform: translateY(20px);
    border-radius: 6px;
    opacity: 0;

    transition: all 0.3s;

    &:hover {
      background: darken(#c51046, 10%);
    }

    &.appear {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.quotes-section {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateX(100%);
  opacity: 0;
  background: rgba(50, 50, 50, 0.5);
  display: flex;
  z-index: -1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.8s ease;

  &.appear {
    z-index: 0;
    transform: translateX(0);
    opacity: 1;
  }
}

/* Basic button styling */

.pulsingButton {
  cursor: pointer;
  font-size: 21px;
  /* width: 220px; */
  text-align: center;
  white-space: nowrap;
  display: block;
  padding: 12px 10px;
  box-shadow: 0 0 0 0 rgba(197, 16, 70, 0.7);
  border-radius: 10px;
  background-color: #c51046;
  -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  color: #ffffff;
  transition: all 300ms ease-in-out;
  &:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: #ffffff;
  }
}
/* Animation */

@-webkit-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@-moz-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@-ms-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}
</style>
