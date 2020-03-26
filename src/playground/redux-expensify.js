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

const sortByAmount = () => ({
    type: "SORT_AMOUNT"
})

const sortByDate = () => ({
    type: "SORT_DATE"
})

const setStartDate = (time) => ({
    type: "START_DATE",
    time
})
const setEndDate = (time) => ({
    type: "END_DATE",
    time
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
        case "SORT_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SORT_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "START_DATE":
            return {
                ...state,
                startDate: action.time
            }
        case "END_DATE":
            return {
                ...state,
                endDate: action.time
            }
        default: 
            return state
    }
}

// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase())
        ;

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1
        }

        if(sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({ description: "Car", amount: 200, createdAt: 200}))

// store.dispatch(removeExpense(expenseOne.expense.id))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

store.dispatch(setTextFilter("rent"))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date

store.dispatch(setStartDate(300));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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