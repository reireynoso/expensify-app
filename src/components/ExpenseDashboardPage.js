import React from 'react'
import ExpensesSummaryComponent from '../components/ExpensesSummaryComponent'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
        <ExpensesSummaryComponent/>
    </div>
)

export default ExpenseDashboardPage