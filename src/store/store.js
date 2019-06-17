import Vue  from 'vue';
import Vuex from 'vuex';
// import lodash from 'lodash'

import events from './models/events'
import community from './models/community'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    events,
    community
  }
});
