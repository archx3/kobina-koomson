import Vue  from 'vue';
import Vuex from 'vuex';
// import lodash from 'lodash'

import portfolio from './models/Portfolio'
import logofolio from './models/Logofolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    portfolio,
    logofolio
  }
});
