<template>
  <div class="carousel-container">
    <VueSlickCarousel v-bind="getSettings">
      <div class="quote" v-for="quote in quotes" :key="quote.id">
        <blockquote>
          <p>{{ quote.quote }}</p>
          <cite>{{ quote.author }}</cite>
        </blockquote>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'QuotesCarousel',
  props: ['quotes'],
  components: { VueSlickCarousel },
  computed: {
    getSettings() {
      return {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        cssEase: 'ease',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 50%;
  position: relative;
  & .quote {
    width: 100%;
    color: white;
    color: #ff2a69;
    padding: 10px 15px;

    & blockquote {
      font-size: 36px;
      line-height: 1.3;
      text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
        0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
      position: relative;
      display: inline-block;
      quotes: '\201C''\201D''\2018''\2019';
      padding: 40px;

      &::before {
        content: open-quote;
        font-weight: 500;
        position: absolute;
        top: -5px;
        left: -5px;
        font-size: 90px;
      }

      &::after {
        content: close-quote;
        font-weight: 500;
        position: absolute;
        bottom: 45px;
        right: -5px;
        font-size: 90px;
      }
    }

    & cite {
      display: block;
      font-style: italic;
      text-align: right;
      margin-top: 15px;
      font-size: 30px;
      color: #ef5482;
      &:before {
        content: '- ';
      }
    }
  }
}
</style>
