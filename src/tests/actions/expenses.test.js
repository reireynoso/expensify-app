import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expensesReducer from '../../reducers/expenses';

test("should setup remove expense action object", () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("should edit expense action object", () => {
    const action = editExpense('123abc', {note: 'newNoteValue'})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: 'newNoteValue'
        }
    })
})

test("should add expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last month's rent"
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("should set up add expense action object with default", () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})