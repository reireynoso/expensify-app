import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test("should set default state", () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test("shoud remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test("shoud not remove expense if not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("should add an expense", () => {
    const newExpense = {
        id: "4",
        description: "Test",
        note: "",
        amount: 400,
        createdAt: 0
    }
    const action = {
        type: "ADD_EXPENSE",
        expense: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})

test("should edit an expense", () => {
    const id = expenses[1].id
    const updates = {
        description: "Edited",
        amount: 500
    }
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[1]).toEqual({...expenses[1], ...updates})
})

test("should not edit if expense not found", () => {
    const id = "-1"
    const updates = {
        description: "Edited",
        amount: 500
    }
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})