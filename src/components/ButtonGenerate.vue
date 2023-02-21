<!-- Ce fichier affiche un button qui permet de recuperer une partie du html et de le generer en PDF. -->
<template>
  <div>
    <span class="btn btn-info" @click="generatePdf">
      Télécharger le fichier PDF
    </span>
    <b-modal
      id="b-modal-manage-project"
      ref="modal"
      v-model="openModel"
      title="Preparation du fichier PDF ..."
      size="lg"
      footer-bg-variant="light"
      header-bg-variant="light"
      :hide-footer="true"
      :no-close-on-backdrop="true"
    >
      <div
        id="contenu-to-generate-pdf"
        ref="model_data"
        class="formata4-iframe mx-auto"
      >
        <div class="thumbnail-container">
          <div class="thumbnail" v-html="data_destination"></div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
export default {
  name: "ButtonGenerate",
  data() {
    return {
      openModel: false,
      classData: ".block-system-main-block",
      data_destination: "put data hier",
    };
  },
  methods: {
    generatePdf() {
      this.openModel = true;
      const source = document.querySelector(this.classData);
      this.data_destination = source.innerHTML;
      this.$nextTick(() => {
        this.dataPdf(this.$refs.model_data);
      });
    },
    dataPdf(html_data) {
      var self = this;
      const options = {
        orientation: "p",
        unit: "px",
        // format: [1220, 1310], // ce format fonctionne pour un body à 1200px
        format: "a4", //[446.5px, 631px] apres test.( Le cadre doit avoir cette largeur, cela est forcement liée à d'autre paramettre. ).
        putOnlyUsedFonts: true,
        floatPrecision: 16, // or "smart", default is 16
      };
      //
      var doc = new jsPDF(options);
      // Convert HTML to PDF in JavaScript
      doc.html(html_data, {
        callback: function (doc) {
          doc.save("output.pdf");
          self.openModel = false;
        },
        x: 0,
        y: 0,
      });
    },
  },
};
</script>
<style lang="scss">
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
  .contextual {
    display: none !important;
    position: absolute !important;
    z-index: -5;
    visibility: hidden;
  }
}
</style>
