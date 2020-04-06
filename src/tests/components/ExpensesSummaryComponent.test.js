import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummaryComponent} from '../../components/ExpensesSummaryComponent'

test("should correctly render expensessummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummaryComponent expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();
})

test("should correctly render expensessummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummaryComponent expenseCount={1} expensesTotal={2351230987}/>)
    expect(wrapper).toMatchSnapshot();
})