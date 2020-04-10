import React from 'react'
import ExpensesSummaryComponent from '../components/ExpensesSummaryComponent'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummaryComponent/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
)

export default ExpenseDashboardPage