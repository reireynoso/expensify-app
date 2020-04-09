import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'
import toJSON from 'enzyme-to-json'

test("render Login page", () => {
    const wrapper = shallow(<LoginPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})
