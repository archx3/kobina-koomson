import { shallowMount, mount }            from '@vue/test-utils'
import LightBox                           from '@/components/LightBox.vue'
import { getRenderedted, getVmPropValue } from '../../lib/test-helpers'

describe('LightBox', () => {
  let wrapper, vm
  beforeEach(() => {
    wrapper = shallowMount(LightBox)
    vm = wrapper.vm

    vm({
      propsData: {
        galleryData  : {
          images: [
            { name: 'Group Photo', url: 'reception-team.jpg' },
            { name: 'Group Photo', url: 'participants-assembling.jpg' },
            { name: 'Group Photo', url: 'setting-the-ball-rolling.jpg' },
            { name: 'Group Photo', url: 'snack-break.jpg' },
            { name: 'Group Photo', url: 'snack-break-2.jpg' },
            { name: 'Group Photo', url: 'swag-paraph.jpg' },
            { name: 'Group Photo', url: 'grp-ph-nc.jpg' }]
        },
        selectedImage: null
      }
    })
  })

  // Inspect the raw component options
  it('has a created hook', function () {
    expect(typeof vm.created).toBe('function')
  })
  it('has a destroyed hook', function () {
    expect(typeof vm.destroyed).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof LightBox.data).toBe('function')
    const defaultData = LightBox.data()
    // FIXME replace the dflt data with the appropriate one
    expect(defaultData.maxIndex).toBeGreaterThanOrEqual(0)
  })

  // Inspect the component instance on mount
  /* it('correctly sets the message when created', () => {
   const vm = new Vue(LightBox).$mount()
   expect(vm.message).toBe('bye!')
   getVmPropValue()
   })
   // Mount an instance and inspect the render output
   it('renders props.msg when passed', () => {
   // test data (could be generated programmatically)
   const msg = 'new message'
   const wrapper = shallowMount(LightBox, {
   propsData: { msg }
   })
   expect(wrapper.text()).toMatch(msg)
   }) */
})
