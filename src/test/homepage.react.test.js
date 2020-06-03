// homepage.react.test.js
import React from 'react';
import Homepage from 'views/Homepage';
import renderer from 'react-test-renderer';

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

describe("Homepage Component", ()=>{
  const wrapper = mount(<Homepage />)

  it("Should match the snapshot", ()=>{
    // const wrapper = shallow(<Homepage />)

    expect(wrapper.exists()).toBe(true)
  });

  it("should have proper search input", ()=>{
    const container = wrapper.find('#input-text-field')

    expect(container.length).toEqual(1)
  })

  it("should set search text value", ()=>{
    const container = wrapper.find('#input-text-field')
    container.simulate('change', { target: {value: 'hello'}})
    wrapper.update()

    // to get refresh value you should redefine again
    expect(wrapper.find('#input-text-field').prop('value')).toEqual('hello')
  });

})
