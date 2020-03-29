import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_AMOUNT"})
    expect(state.sortBy).toBe(
        "amount"
    )
})

test("should set sortBy to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    }
    const action = { type: "SORT_DATE"}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test("should set textfilter", () => {
    const action = { type: "SET_TEXT_FILTER", text: "filter"}
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('filter')
})

test("should set startDate filter", () => {
    const time = moment()
    const action = {type: "START_DATE", time}
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(time)
})

test("should set endDate filter", () => {
    const time = moment()
    const action = {type: "END_DATE", time}
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(time)
})