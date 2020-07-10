<template
  ><div>
    <h3 class="question">What do you need the most now?</h3>
    <div class="select-container">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one" class="need ambition"
        ><img src="../../../assets/motivationRoom/ambition.png" alt="" />
        <span>Ambition</span></label
      >

      <input type="radio" id="three" value="three" v-model="picked" />
      <label for="three" class="need"
        ><img src="../../../assets/motivationRoom/courage.png" alt="" />
        <span>Courage</span></label
      >

      <input type="radio" id="three" value="three" v-model="picked" />
      <label for="three" class="need"
        ><img src="../../../assets/motivationRoom/enthusiasm.png" alt="" />
        <span>Positivity</span></label
      >

      <input type="radio" id="three" value="three" v-model="picked" />
      <label for="three" class="need"
        ><img src="../../../assets/motivationRoom/fullfilness.png" alt="" />
        <span>Fulfillness</span></label
      >

      <input type="radio" id="three" value="three" v-model="picked" />
      <label for="three" class="need"
        ><img src="../../../assets/motivationRoom/productivity.png" alt="" />
        <span>Productivity</span></label
      >

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two" class="need"
        ><img src="../../../assets/motivationRoom/struggle.png" alt="" />
        <span>Relax</span></label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectOption',
  data() {
    return {
      picked: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  background: tomato;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
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

  & > label {
    display: inline-block;
    height: 100px;
    border: 1px solid silver;
    border-radius: 4px;
    /* flex: 1 1 0; */
    margin: 0 10px;
    width: 60px;
    position: relative;

    & > img {
      width: 100%;
      height: 100%;
      transition: all 0.3s;

      &:hover {
        filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
          brightness(95%) contrast(80%);
      }
    }
  }
}

.question {
  color: #1afcda;
  color: #89ff03;
  color: #7903ff;
  color: #284bf9;
  color: #e09451;
  color: #f95528;
  color: #39f928;
  color: #f9f228;
  color: #e828f9;
  color: #7f28f9;
  font-size: 55px;
}
</style>
