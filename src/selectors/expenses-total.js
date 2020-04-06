const getExpensesTotal = (expenses) => {
    // let total = 0
    // expenses.map(expense => total += expense.amount)
    // return total
    const total = expenses.map(expense => expense.amount).reduce((sum, value) => {
        return sum + value
    }, 0)
    return total
}

export default getExpensesTotal