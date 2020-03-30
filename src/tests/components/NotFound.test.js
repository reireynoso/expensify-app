import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/NotFound'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test("render not found page", () => {
    const wrapper = shallow(<NotFoundPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})
