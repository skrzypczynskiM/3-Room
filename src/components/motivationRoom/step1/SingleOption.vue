<template>
  <li class="list-complete-item">
    <input
      type="radio"
      :id="id"
      :value="title"
      v-on:change="$emit('input', $event.target.value)"
      v-model="value"
    />
    <label :for="id" class="need">
      <!-- <span selected-container> -->
      <CheckIcon class="selected" />
      <!-- </span> -->
      <img :src="getImgUrl(src)" :alt="title" />
      <span class="title"> {{ title }}</span></label
    >
  </li>
</template>

<script>
import CheckIcon from '../../../../icons/Check';

export default {
  name: 'SingleOption',

  props: ['value', 'id', 'src', 'title'],

  methods: {
    getImgUrl(pic) {
      return require('../../../assets/motivationRoom/' + pic);
    },
  },

  components: {
    CheckIcon,
  },
};
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
}

input[type='radio'] {
  display: none;

  &:checked ~ label {
    border: 2px solid #4c00ff;
    border: 2px solid #ff5185;

    /* -webkit-box-shadow: 0px 0px 26px -7px rgba(109, 50, 247, 1);
    -moz-box-shadow: 0px 0px 26px -7px rgba(109, 50, 247, 1);
    box-shadow: 0px 0px 26px -7px rgba(109, 50, 247, 1); */
    & > img {
      filter: invert(20%) sepia(54%) saturate(7261%) hue-rotate(257deg)
        brightness(99%) contrast(95%);

      filter: invert(44%) sepia(38%) saturate(1721%) hue-rotate(305deg)
        brightness(103%) contrast(101%);
    }

    & > .title {
      color: #6d32f7;
      color: white;
      color: #ff5185;
    }

    & > .selected {
      /* opacity: 1; */
      /* transform: scale(1); */
      animation: scaleUp 0.3s ease both;
    }
  }
}

label {
  display: inline-block;
  position: relative;
  border: 2px solid #303030;
  border: 2px solid #b0b0b0;
  border-radius: 8px;

  margin: 10px 20px;
  height: 130px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
  transition: all 0.3s;

  @media (min-width: $mobileL) {
    /* margin: 20px 30px; */
    height: 170px;
    width: 120px;
  }

  @media (min-width: $tablet) {
    margin: 20px 30px;
    height: 220px;
    width: 140px;
  }

  @media (min-width: $laptop) {
    margin: 20px 30px;
    height: 200px;
    width: 150px;
  }

  @media (min-width: $laptopL) {
    margin: 20px 30px;
    height: 220px;
    width: 170px;
  }

  &:hover {
    border: 2px solid #6d32f7;
    border: 2px solid #ff5185;
    & > img {
      filter: invert(20%) sepia(54%) saturate(7261%) hue-rotate(257deg)
        brightness(99%) contrast(95%);

      filter: invert(44%) sepia(38%) saturate(1721%) hue-rotate(305deg)
        brightness(103%) contrast(101%);
    }
    & > .title {
      color: #6d32f7;
      color: #ff5185;
    }
  }

  & > .selected {
    fill: white;

    width: 23px;
    height: 23px;

    padding: 6px;
    opacity: 0;
    transform: scale(0);
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -10%;

    z-index: 10;
    background: #6d32f7;
    background: #ff5185;
    border-radius: 50%;

    @media (min-width: $mobileL) {
      width: 27px;
      height: 27px;
      padding: 8px;
      top: -9%;
    }

    @media (min-width: $tablet) {
      top: -8%;
      width: 30px;
      height: 30px;
    }

    /* transition: all 0.3s; */
  }

  & > img {
    width: 50%;
    height: 50%;
    filter: invert(9%) sepia(96%) saturate(28%) hue-rotate(314deg)
      brightness(87%) contrast(93%);

    filter: invert(84%) sepia(0%) saturate(0%) hue-rotate(197deg)
      brightness(90%) contrast(97%);

    filter: invert(61%) sepia(0%) saturate(1%) hue-rotate(319deg)
      brightness(94%) contrast(92%);

    transition: all 0.3s;
  }

  & > .title {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #202020;
    color: #909090;
    transition: all 0.3s;

    @media (min-width: $laptop) {
      font-size: 20px;
      margin-top: 20px;
    }
  }
}

@keyframes scaleUp {
  1% {
    transform: scale(0);
    opacity: 0;
  }
  80% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
