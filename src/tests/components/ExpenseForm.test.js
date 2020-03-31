import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test("should set description on input change", () => {
    const value ="description"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("input").at(0).simulate("change", {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test("should set note on textarea", () => {
    const value ="note"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("textarea").simulate("change", {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test("should set amount if valid input", () => {
    const value ="23.50"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("input").at(1).simulate("change", {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test("should set amount if invalid input", () => {
    const value ="12.122"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("input").at(1).simulate("change", {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe("");
})