import {setTextFilter, setSortByAmount, sortByDate, setStartDate, setEndDate, sortByAmount} from '../../actions/filters'
import moment from 'moment'

test("should generate setStart date action object", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "START_DATE",
        time: moment(0)
    })
})

test("should generate set end data action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "END_DATE",
        time: moment(0)
    })
})

test("should generate set Text filter with passed values", () => {
    const action = setTextFilter("sample text")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "sample text"
    })
})

test("should generate set Text filter with no passed values", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

test("should generate sort by amount action object", () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: "SORT_AMOUNT"
    })
})

test("should generate sort by date action object", () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: "SORT_DATE"
    })
})