<template>
  <div class="main-wrapper">
    <div class="content">
      <h3 class="question">What do you need the most now?</h3>
      <!-- <button v-on:click="toggleS" class="but">Start</button> -->

      <transition-group
        tag="ul"
        name="slide-in"
        class="select-container"
        appear
        :style="{ '--total': imagesArr.length }"
      >
        <SingleOption
          v-for="(img, i) in imagesArr"
          :key="img.id"
          :id="img.id"
          :src="img.src"
          :title="img.title"
          v-model="desire"
          v-on:input="$emit('selectedDesire', desire)"
          :style="{ '--i': i }"
        />
      </transition-group>
      <transition name="slide" v-on:afterLeave="afterLeave">
        <div class="next-step" v-on:click="nextStep" v-if="!isSelected">
          <span class="next-step-text" :class="{ active: desire.length > 0 }"
            >Next</span
          >
          <RightIcon
            class="next-step-arrow"
            :class="{ active: desire.length > 0 }"
          />
        </div>
      </transition>

      <button
        v-on:click="nextStep"
        v-if="!isSelected"
        class="next-step-mobile"
        :class="{ active: desire.length > 0 }"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import SingleOption from './SingleOption';
import RightIcon from '../../../../icons/Right';

import { images } from './images';

export default {
  name: 'SelectOption',
  props: ['setDesire', 'desire'],
  data() {
    return {
      isSelected: false,
      start: false,
      // items: [],
    };
  },

  methods: {
    nextStep() {
      this.isSelected = true;
    },

    updateDesire(newValue) {
      this.desire = newValue;
    },
    toggleS() {
      this.start = !this.start;
    },

    afterLeave() {
      this.$emit('nextStep');
    },
  },
  computed: {
    imagesArr() {
      return images;
    },
  },

  components: {
    SingleOption,
    RightIcon,
  },

  // mounted() {
  //   const interval = setInterval(() => {
  //     if (!images.length) {
  //       clearInterval(interval);
  //     } else {
  //       this.items.push(images.shift());
  //     }
  //   }, 600);
  // },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fc4a1a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7b733,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7b733,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (min-width: $tablet) {
    overflow: hidden;
  }
}

.content {
  overflow: hidden;

  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $mobileL) {
    width: 80%;
    padding: 40px 0px;
  }

  @media (min-width: $tablet) {
    padding: 40px 20px;
    width: 80%;
  }

  @media (min-width: $laptop) {
    width: 70%;
    margin: 0 auto;
    padding: 30px 30px 0px;
  }
}
.select-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  /* height: 100%; */
  flex-wrap: wrap;
  list-style-type: none;
  padding-bottom: 40px;
  /* padding: 30px 50px; */

  @media (min-width: $laptop) {
    padding: 30px 50px;
  }
}
.next-step {
  display: none;
  @media (min-width: $laptop) {
    display: inline-block;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    /* transition: all 0.7s cubic-bezier(0.17, 0.67, 1, 1.23); */
    &:hover > .next-step-text {
      transform: translateX(10px);
    }
  }
  &.slide {
    transform: translate(100%, -50%);
    opacity: 0;
  }

  & > .next-step-text {
    font-size: 40px;
    font-weight: 600;
    color: #202020;
    display: inline-block;
    position: relative;
    opacity: 0;
    right: -30px;
    padding-right: 0px;
    font-style: italic;
    transition: all 0.4s;

    &.active {
      padding-right: 20px;
      opacity: 1;
      cursor: pointer;
    }
  }

  & > .next-step-arrow {
    display: inline-block;

    width: 120px;
    height: 120px;

    fill: #202020;
    opacity: 0.2;

    transition: all 0.3s;

    &.active {
      opacity: 1;
      cursor: pointer;
    }
  }
}
.question {
  font-size: 39px;
  color: #32f7a8;
  /* margin-bottom: 30px; */
  padding: 10px 15px 30px;

  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  @media (min-width: $mobileM) {
    font-size: 41px;
    padding-bottom: 35px;
    /* margin-bottom: 40px; */
  }
  @media (min-width: $mobileL) {
    font-size: 45px;
    padding-bottom: 40px;
  }

  @media (min-width: $laptop) {
    font-size: 55px;
  }
}

.next-step-mobile {
  position: relative;
  width: 130px;
  height: 40px;
  padding: 6px 8px;
  color: white;
  border-radius: 4px;
  background: #6d32f7;
  opacity: 0.2;
  margin: 0 0 10px;
  font-size: 21px;

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: all 0.3s;

  @media (min-width: $mobileL) {
    width: 160px;
  }

  @media (min-width: $tablet) {
    width: 170px;
  }

  @media (min-width: $laptop) {
    display: none;
  }

  &::after {
    content: '\2192';
    position: absolute;

    right: 0;
    opacity: 0;
    top: 0;
    /* width: 21px;
    height: 21px; */
    transition: all 0.3s;
    color: white;
    font-size: 30px;
  }

  &.active {
    opacity: 1;
    pointer-events: auto;

    &::after {
      opacity: 1;
      right: 10%;
    }
  }
}

.slide-leave-active {
  transform: translate(100%, -50%);
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 1, 1.23);
}
.slide-leave {
  opacity: 1;
  transform: translate(0, -50%);
}

/* .list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
} */

/* 
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
} */

.slide-in {
  &-move {
    transition: opacity 0.5s linear, transform 0.5s ease-in-out;
  }

  &-leave-active {
    transition: opacity 0.4s linear,
      transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4); //cubic-bezier(.7,0,.7,1);
    transition-delay: calc(0.3s * (var(--total) - var(--i)));
  }

  &-enter-active {
    transition: opacity 0.5s linear,
      transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
    transition-delay: calc(0.3s * var(--i));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter {
    transform: translateY(40px);
  }
  &-leave-to {
    transform: translateX(0);
  }
}
</style>
