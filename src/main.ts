import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueYoutubeEmbed from "vue-youtube-embed";

Vue.config.productionTip = false;
Vue.use(VueYoutubeEmbed);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
