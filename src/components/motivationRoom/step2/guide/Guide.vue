<template>
  <div class="container border-animation__inner">
    <PersonaSection
      :loadMedia="loadMedia"
      :loadImage="loadImage"
      :stage="stage"
      :img="desireData.img"
      :guide="desireData.guide"
      :mainQuote="desireData.mainQuote"
      v-on:stage-change="$emit('stage-change', $event)"
    />

    <VideoSection
      :videoClicked="videoClicked"
      :stage="stage"
      :moveToQuotes="moveToQuotes"
      :url="desireData.url"
      v-on:stage-change="$emit('stage-change', $event)"
    />

    <QuotesSection
      :moveToQuotes="moveToQuotes"
      :quotes="desireData.quotes"
      :stage="stage"
      v-on:stage-change="$emit('stage-change', $event)"
    />
  </div>
</template>

<script>
import PersonaSection from './PersonaSection';
import VideoSection from './VideoSection';
import QuotesSection from './QuotesSection';

export default {
  name: 'Guide',
  props: ['loadImage', 'loadMedia', 'desireData', 'stage'],
  data() {
    return {
      videoClicked: false,
      moveToQuotes: false,
    };
  },

  methods: {
    // toggleVideo() {
    //   this.videoClicked = !this.videoClicked;
    // },
    // toggleNextStep() {
    //   this.moveToQuotes = !this.moveToQuotes;
    // },
  },

  components: {
    PersonaSection,
    VideoSection,
    QuotesSection,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: inline-block;
  text-align: center;
  background: rgba(50, 50, 50, 0.5);
  z-index: 1;
  padding: 0.2em;
  border: solid 0.3em transparent;
}

/* .back {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  opacity: 0;
  transform: translateX(20px);
  transition: 0.3s ease;

  &.appear {
    opacity: 1;
    transform: translateX(0);
  }

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
} */
</style>
