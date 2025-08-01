import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { store } from "./store/store";
import Routes from "./routes/routes";
import BlogRoutes from "./routes/blog-routes";
import VueScrollReveal from "vue-scroll-reveal";

// import stylesheets
// import 'bootstrap/dist/css/bootstrap.css'
// import 'primeicons/primeicons.css'
import "./assets/styles/scss/bootstrap/bootstrap.scss";
import "./assets/styles/scss/style.scss";

import Footer from "./layout-components/FooterSection.vue";
import MiniFooter from "./layout-components/mini-footer.vue";
import HeaderWrap from "./layout-components/HeaderWrap.vue";
import PageTitle from "./layouts/PageTitle";
import ExtPageLayout from "./layouts/ExtPageLayout";
import Loader from "./components/Loader";
import LazyImage from "./components/LazyImage";
import LazyBackground from "./directives/LazyBackground";
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BModal, BRow, BButton } from "bootstrap-vue";
import LazyBackground2 from "@/directives/LazyBackground2";

import VueMeta from 'vue-meta';

Vue.use(VueMeta);

// region bootstrap vue components
Vue.component("header-wrap", HeaderWrap);
Vue.component("footer-section", Footer);
Vue.component("mini-footer", MiniFooter);
Vue.component("page-title", PageTitle);
Vue.component("ext-page-layout", ExtPageLayout);
Vue.component("loader", Loader);
Vue.component("lazy-image", LazyImage);
Vue.component("b-container", BContainer);
Vue.component("b-col", BCol);
Vue.component("b-row", BRow);
Vue.component("b-row", BRow);
Vue.component("b-card", BCard);
Vue.component("b-card-body", BCardBody);
Vue.component("b-card-header", BCardHeader);
Vue.component("b-modal", BModal);
Vue.component("b-button", BButton);
// endregion

export const bus = new Vue();
Vue.config.productionTip = false;

// region Vue filters
Vue.use(VueRouter);
Vue.use(VueResource);
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: "10px",
  mobile: false
});
// endregion

// region custom directives
Vue.directive("lazy-background", LazyBackground);
Vue.directive("lazy-background-2", LazyBackground2);
Vue.directive("background", function (el, binding) {
  if (typeof binding.value === "string") {
    el.style.backgroundImage = `url(${binding.value})`;
  } else if (typeof binding.value === "object") {
    for (let property in binding.value) {
      if (binding.value.hasOwnProperty(property)) {
        if (property === "backgroundImage" || property === "background-image") {
          el.style.backgroundImage = `url(${binding.value})`;
        }
      }
    }
  }
});
// endregion

const router = new VueRouter({
  routes: [
    ...Routes,
    ...BlogRoutes,
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App) // components: { App }, template: '<App/>', el: '#app'
}).$mount("#app");
