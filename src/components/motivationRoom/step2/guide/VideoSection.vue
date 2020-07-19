<template>
  <div
    class="video-section"
    :class="{ appear: videoClicked, hide: moveToQuotes }"
  >
    <BackButton v-on:click="$emit('stage-change', 'guide')" />
    <div class="video-container">
      <iframe
        :src="url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <button class="moreMotivation" v-on:click="$emit('quoteSection', $event)">
      Cement your motivation
    </button>
  </div>
</template>

<script>
import BackButton from '../../BackButton';
export default {
  name: 'VideoSection',
  props: ['videoClicked', 'moveToQuotes', 'url', 'stage'],
  data() {
    return {
      showButton: false,
    };
  },

  mounted() {
    setTimeout(() => (this.showButton = !this.showButton), 10000);
  },
  components: {
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

    /* transform: translateY(20px); */
    border-radius: 6px;
    /* opacity: 0; */

    transition: all 0.3s;

    &:hover {
      background: darken(#c51046, 10%);
    }

    /* &.appear {
      transform: translateY(0);
      opacity: 1;
    } */
  }
}
</style>
