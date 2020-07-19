<template>
  <div class="quotes-section" :class="{ appear: moveToQuotes }">
    <BackButton v-on:click="$emit('stage-change', 'video')" />
    <QuotesCarousel :quotes="quotes" />
    <router-link to="/">
      <button class="pulsingButton" :class="{ appear: showButton }">
        Let's get back to work!
      </button>
    </router-link>
  </div>
</template>

<script>
import QuotesCarousel from './QuotesCarousel';
import BackButton from '../../BackButton';

export default {
  name: 'QuotesSection',
  props: ['moveToQuotes', 'quotes', 'stage'],
  data() {
    return {
      showButton: false,
    };
  },
  components: {
    QuotesCarousel,
    BackButton,
  },

  mounted() {
    setTimeout(() => (this.showButton = !this.showButton), 10000);
  },
};
</script>

<style lang="scss" scoped>
.quotes-section {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateX(100%);
  opacity: 0;
  background: rgba(50, 50, 50, 0.5);
  /* display: flex; */
  z-index: -1;
  /* flex-direction: column; */
  /* justify-content: space-around; */
  /* align-items: center; */
  transition: all 0.8s ease;

  &.appear {
    z-index: 0;
    transform: translateX(0);
    opacity: 1;
  }
}

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
  opacity: 0;
  transform: translateY(30px);
  transition: all 300ms ease-in-out;

  &.appear {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: #ffffff;
  }
}

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
