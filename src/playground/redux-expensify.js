import {createStore, combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid';

// Action generators

const addExpense = ({ description="", note="",amount=0, createdAt=0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})


// Expenses reducer 

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            // return state.concat(action.expense)
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            const newExpense = state.filter((expense) => expense.id !== action.id)
            return newExpense
        case "EDIT_EXPENSE":
            console.log(action)
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense
            })
        default:
            return state
    }
}

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

const filtersReducerDefault = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        default: 
            return state
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100}))
const expenseTwo = store.dispatch(addExpense({ description: "Car", amount: 200}))

console.log(expenseOne)
store.dispatch(removeExpense(expenseOne.expense.id))

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

store.dispatch(setTextFilter("rent"))
store.dispatch(setTextFilter())

const demoState = {
    expenses: [{
        id: 'dskand',
        description: "January Rent",
        note: "Final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}