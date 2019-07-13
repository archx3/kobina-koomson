import Vue from 'vue'
import App from './App.vue'

import VueRouter       from 'vue-router'
import VueResource     from 'vue-resource'
import { store }       from './store/store'
import Routes          from './routes/routes'
import VueScrollReveal from 'vue-scroll-reveal';

// import stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/scss/style.scss'

import Footer        from './components/FooterSection'
import HeaderWrap    from "./components/HeaderWrap";
import PageTitle     from "./layouts/PageTitle";
import ExtPageLayout from "./layouts/ExtPageLayout";
import Loader        from "./components/Loader";
import LazyImage        from "./components/LazyImage";
import LazyBackground        from "./directives/LazyBackground";

Vue.component('header-wrap', HeaderWrap);
Vue.component('footer-section', Footer);
Vue.component('page-title', PageTitle);
Vue.component('ext-page-layout', ExtPageLayout);
Vue.component('loader', Loader);
Vue.component('lazy-image', LazyImage);

export const bus = new Vue();
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class    : 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration : 800,
  scale    : 1,
  distance : '10px',
  mobile   : false
});

// custom directives
Vue.directive('lazy-background', LazyBackground);
Vue.directive('background', function (el, binding) {
  if (typeof binding.value === 'string') {
    el.style.backgroundImage =  `url(${binding.value})`;
  } else if (typeof binding.value === 'object') {
    for (let property in binding.value) {
      if (binding.value.hasOwnProperty(property)) {
        if (property === 'backgroundImage' || property ===  'background-image')
        {
          el.style.backgroundImage =  `url(${binding.value})`;
        }
      }
    }
  }
});
// Vue.directive('lazy-load', LazyLoad);

const router = new VueRouter({
  routes : Routes,
  scrollBehavior (to, from, savedPosition)
  {
    if (to.hash)
    {
      return {
        selector : to.hash
      }
    }
    if (savedPosition)
    {
      return savedPosition
    }
    else
    {
      return { x : 0, y : 0 }
    }
  },
  mode   : 'history'
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render : h => h(App) // components: { App }, template: '<App/>', el: '#app'
}).$mount('#app');
