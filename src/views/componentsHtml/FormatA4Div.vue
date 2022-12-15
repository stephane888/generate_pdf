<template>
  <div class="formata4-iframe">
    <div class="thumbnail-container">
      <div class="thumbnail">
        <PresenSectionVue></PresenSectionVue>
      </div>
    </div>
  </div>
</template>

<script>
import PresenSectionVue from "./PresenSection.vue";
export default {
  name: "FormatA4Div",
  components: {
    PresenSectionVue,
  },
};
</script>
<style lang="scss" scoped>
.formata4-iframe {
  width: 446.5px;
  height: 631px;
  border: 2px solid #fff;
  overflow: hidden;
  .thumbnail-container {
    position: relative;
    -ms-zoom: 32%;
    -moz-transform: scale(32%);
    -moz-transform-origin: 0 0;
    -o-transform: scale(32%);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(32%);
    -webkit-transform-origin: 0 0;
  }
  .thumbnail {
    border: 0 solid black;
    width: 1384px;
    height: 1655px;
  }
}
</style>
