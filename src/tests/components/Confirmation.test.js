import React from 'react'
import {shallow} from 'enzyme'
import Confirmation from '../../components/Confirmation'

let onCancel, onConfirm, optionalText, wrapper;

beforeEach(() => {
    onCancel = jest.fn()
    onConfirm = jest.fn()
    optionalText = "text"
    wrapper = shallow(<Confirmation onCancel={onCancel} onConfirm={onConfirm} optionalText={optionalText}/>)
})

test("should render component", () => {
    expect(wrapper).toMatchSnapshot();
})