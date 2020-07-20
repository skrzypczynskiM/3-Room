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
      :loadMedia="loadMedia"
      :guide="desireData.guide"
      :stage="stage"
      :moveToQuotes="moveToQuotes"
      :url="desireData.url"
      v-on:stage-change="$emit('stage-change', $event)"
    />

    <QuotesSection
      :loadMedia="loadMedia"
      :moveToQuotes="moveToQuotes"
      :quotes="desireData.quotes"
      :stage="stage"
      v-on:stage-change="$emit('stage-change', $event)"
    />
  </div>
</template>

<script>
import PersonaSection from './personaSection/PersonaSection';
import VideoSection from './videoSection/VideoSection';
import QuotesSection from './quotesSection/QuotesSection';

export default {
  name: 'Guide',
  props: ['loadImage', 'loadMedia', 'desireData', 'stage'],
  data() {
    return {
      videoClicked: false,
      moveToQuotes: false,
    };
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
  height: 95%;
  @media (min-width: $mobileM) {
    height: 100%;
  }
}
</style>
