<template>
  <div class="formata4-iframe">
    <div class="thumbnail-container">
      <div class="thumbnail">
        <iframe
          src="http://jean-franc-loic250.wb-horizon.kksa/"
          frameborder="0"
          class=""
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.formata4-iframe {
  width: 446.5px;
  height: 631px;
  background: antiquewhite;
  border: 2px solid #d10303;
  overflow: hidden;
  .thumbnail {
    position: relative;
    -ms-zoom: 28%;
    -moz-transform: scale(28%);
    -moz-transform-origin: 0 0;
    -o-transform: scale(28%);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(28%);
    -webkit-transform-origin: 0 0;
  }
  iframe {
    border: 0 solid black;
    width: 1580px;
    height: 1655px;
  }
}
</style>
