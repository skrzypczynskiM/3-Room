<template>
  <div class="carousel-container">
    <VueSlickCarousel v-bind="getSettings">
      <div class="quote">
        <blockquote>
          <p>The Way Get Started Is To Quit Talking And Begin Doing.</p>
          <cite>Samuel Beckett</cite>
        </blockquote>
      </div>

      <div class="quote">
        <blockquote>
          <p>
            The Pessimist Sees Difficulty In Every Opportunity. The Optimist
            Sees Opportunity In Every Difficulty.
          </p>
          <cite>Winston Churchill</cite>
        </blockquote>
      </div>

      <!-- <div class="quote">
        “The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney
      </div>
      <div class="quote">
        “The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees
        Opportunity In Every Difficulty.” – Winston Churchill
      </div>
      <div class="quote">
        “Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers
      </div>
      <div class="quote">
        “You Learn More From Failure Than From Success. Don’t Let It Stop You.
        Failure Builds Character.” – Unknown
      </div> -->
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'QuotesCarousel',
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
        autoplaySpeed: 5000,
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
    /* border: 1px solid #ff2a69; */
    /* border: 1px solid white; */

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
      color: #ff2a69;
      color: white;
      color: #ef548287;
      color: #ef5482;
      &:before {
        content: '- ';
      }
    }
  }
}
</style>
