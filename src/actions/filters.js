export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

export const sortByAmount = () => ({
    type: "SORT_AMOUNT"
})

export const sortByDate = () => ({
    type: "SORT_DATE"
})

export const setStartDate = (time) => ({
    type: "START_DATE",
    time
})
export const setEndDate = (time) => ({
    type: "END_DATE",
    time
})