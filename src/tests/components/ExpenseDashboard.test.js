import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test("should render expense dashboard page", () => {
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})