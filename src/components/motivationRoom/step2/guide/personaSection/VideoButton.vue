<template>
  <a
    class="video-navigation"
    :class="{ appear: loadMedia }"
    v-on:click="$emit('stage-change', 'video')"
  >
    <TvIcon />
    <PlayIcon />
  </a>
</template>

<script>
import PlayIcon from '../../../../../../icons/Play';
import TvIcon from '../../../../../../icons/Tv';

export default {
  name: 'VideoButton',
  props: ['loadMedia'],
  components: {
    PlayIcon,
    TvIcon,
  },
};
</script>

<style lang="scss" scoped>
.video-navigation {
  display: none;
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
    display: inline-block;
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
</style>
