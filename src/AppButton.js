import Vue from "vue";
import App from "./components/ButtonGenerate.vue";
import "./plugins/AppButton";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app-generate-pdf-button");
