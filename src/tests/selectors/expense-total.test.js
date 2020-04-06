import expensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test("should return 0 if no expenses", () => {
    const total = expensesTotal([])
    expect(total).toEqual(0)
})

test("should return single expense total correctly", () => {
    const total = expensesTotal([expenses[0]])
    expect(total).toEqual(expenses[0].amount)
})

test("should return multiple expenses total correctly", () => {
    const total = expensesTotal(expenses)
    expect(total).toEqual(114195)
})
