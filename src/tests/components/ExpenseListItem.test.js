import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test("should render ExpenseListItem correctly", () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>)
    // console.log(wrapper)
    expect(toJSON(wrapper)).toMatchSnapshot();
})
