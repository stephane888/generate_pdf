<!--
https://html2canvas.hertzen.com/configuration
https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
-->
<template>
  <div>
    <div id="contenu-pdf" class="">
      <FormatA4DivVue></FormatA4DivVue>
    </div>
    <span class="d-inline-block btn btn-info" @click="generatePdf2">
      Generate Pdf V2
    </span>
  </div>
</template>

<script>
import FormatA4DivVue from "./componentsHtml/FormatA4Div.vue";
import { jsPDF } from "jspdf";
export default {
  name: "TestPdf",
  components: {
    FormatA4DivVue,
  },
  methods: {
    generatePdf2() {
      //var doc = new jsPDF("l", "px", [1200, 1210]);
      const options = {
        orientation: "p",
        unit: "px",
        //format: [1220, 1310], // ce format fonctionne pour un body à 1200px
        format: "a4", //[446.5px, 631px] apres test.( Le cadre doit avoir cette largeur, cela est forcement liée à d'autre paramettre. ).
        putOnlyUsedFonts: true,
        floatPrecision: 16, // or "smart", default is 16
      };
      //
      var doc = new jsPDF(options);
      var pdfjs = document.querySelector("#contenu-pdf");
      // Convert HTML to PDF in JavaScript

      doc.html(pdfjs, {
        callback: function (doc) {
          //doc.setDisplayMode("10%");
          doc.save("output.pdf");
        },
        x: 0,
        y: 0,
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
