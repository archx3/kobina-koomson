import Vue  from 'vue';
import Vuex from 'vuex';
// import lodash from 'lodash'

import portfolio from './models/Portfolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    portfolio
  }
});
