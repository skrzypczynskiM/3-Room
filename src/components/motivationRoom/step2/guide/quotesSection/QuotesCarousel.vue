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
        arrows: false,
        dots: false,
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
  width: 90%;
  position: relative;
  margin: 40px auto 40px;

  @media (min-width: $mobileL) {
  }

  @media (min-width: $laptop) {
    width: 65%;
    margin: 60px auto;
    /* margin-bottom: 20px; */
  }

  & .quote {
    width: 100%;
    color: white;
    color: #ff2a69;
    padding: 10px 15px;

    & blockquote {
      font-size: 18px;
      line-height: 1.3;
      text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
        0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
      position: relative;
      display: inline-block;
      quotes: '\201C''\201D''\2018''\2019';
      padding: 10px;

      @media (min-width: $mobileM) {
        font-size: 24px;
      }

      @media (min-width: $mobileL) {
        font-size: 25px;
        padding: 30px;
      }

      @media (min-width: $tablet) {
        padding: 40px;
      }

      @media (min-width: $laptop) {
        padding: 60px;
        font-size: 32px;
      }

      @media (min-width: $laptopL) {
        font-size: 40px;
        padding: 40px;
      }

      &::before,
      &::after {
        font-weight: 500;
        position: absolute;
        font-size: 50px;
        z-index: 11;

        @media (min-width: $laptop) {
          font-size: 90px;
        }
      }

      &::before {
        content: open-quote;
        top: -8%;
        left: -9%;

        @media (min-width: $mobileM) {
          left: -4%;
        }

        @media (min-width: $laptop) {
          top: -5px;
          left: -5px;
        }
      }

      &::after {
        content: close-quote;
        bottom: 0%;
        right: -6%;

        @media (min-width: $tablet) {
          bottom: 8%;
          right: 2%;
        }

        @media (min-width: $laptop) {
          bottom: 8%;
          right: -5px;
        }

        @media (min-width: $laptopL) {
          bottom: 45px;
          right: -5px;
        }
      }

      & cite {
        display: block;
        font-style: italic;
        text-align: right;
        margin-top: 15px;
        font-size: 15px;
        color: #ef5482;
        &:before {
          content: '- ';
        }

        @media (min-width: $laptop) {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
