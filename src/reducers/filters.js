import moment from 'moment';

const filtersReducerDefault = {
    text: "",
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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

export default filtersReducer