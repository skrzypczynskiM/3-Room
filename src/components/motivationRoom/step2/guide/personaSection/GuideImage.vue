<template>
  <img :src="getImgUrl(img)" :alt="guide" :class="{ appear: loadImage }" />
</template>

<script>
export default {
  name: 'GuideImage',
  props: ['loadImage', 'img', 'guide'],
  methods: {
    getImgUrl(pic) {
      return require('../../../../../assets/motivationRoom/guides/' + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
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
</style>
