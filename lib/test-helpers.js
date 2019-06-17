import { shallowMount } from '@vue/test-utils'

export default {
  //
  /**
   * helper function that mounts and returns the rendered text
   * @param component
   * @param propsData
   * @returns {string}
   */
  getRenderedText : function (component, propsData) {
    // test data (could be generated programmatically)
    const wrapper = shallowMount(component, { propsData: propsData })
    return wrapper.text()
  },
  /**
   * Helper function to create a mounted component
   * @param component
   * @returns {Wrapper<Vue>}
   */
  getVm : function (component) {
    return shallowMount(component)
  },
  /**
   * @param component {Component}
   * @param prop {String}
   */
  getVmPropValue : function (component, prop) {
    const wrapper = shallowMount(component)
    return wrapper[prop];
  }
}
