/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namesapcing every
 else all them are called at once when used */
export default {
  namespaced : true, // this ensures that we deal with naming conflicts
  modules    : {}, // nested modules
  state      : {
    logos : [
      { name : 'Beta Systems', image : 'beta-systems.png' },
      { name : 'BARGE Studios inc.', image : [ 'bgst-1.png', 'bgst-2.png', 'bgst-3.png', ], bgColor : '#fff', light : true },
      { name : 'Cara Connections', image : 'cara-connections.png' },
      { name : 'Ful Pruf inc', image : 'fulpruf.png', bgColor : '#fff', light : true },
      { name : 'JS Camp', image : ['js-camp-1.png', 'js-camp-2.png'], bgColor : '#fff', light : true },
      { name : 'Advancia', image : 'advancia.png' },
      { name : 'Front Dəsk', image : 'fd.png' },
      { name : 'VerIT', image : 'verit.png', bgColor : '#fff', light : true },
      { name : 'VR Camp', image : 'vr-camp.png', bgColor : '#fff', light : true },
      { name : 'Moov', image : 'moov.png', bgColor : '#0ff', light : true },
      { name : 'Nexus', image : ['nexus-1.png', 'nexus-2.png'], bgColor : '#fff', light : true },
      { name : 'Virusense', image : 'virusense.png' },
      { name : 'VX Studios', image : 'vx-studio.png' },
    ]
  },
  getters    : {
    logos       : (state, getters) =>
    {
      return state.logos;
    }
  },
  // Use to alter state not for fetching data or complex computations
  mutations  : {
    alterExample : (state, payload) =>
    {
      state.example = payload
    }
  },
  // Do not use for direct update. Call the coresponding mutation
  actions    : {
    alterExample : ({ commit, getters, state }, payload) =>
    {
      // the first arg is context[commit, state]
      // here we're only getting the commit and state props
      commit('alterExample', payload)
    }
  },
}
