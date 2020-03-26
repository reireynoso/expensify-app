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

export default expensesReducer