import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter} from '../actions/filters'
import {sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        console.log(calendarFocused)
        this.setState(() => ({
            calendarFocused
        }))
    }
    render(){
        return (
        <div>
            <input type="text" onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
            }} value={this.props.filters.text}/>
            <select
                value={this.props.filters.sortBy} 
                onChange={(e) => {
                e.target.value === "date" ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
        )
    }
}

// const ExpenseListFilters = (props) => (
//     <div>
//         <input type="text" onChange={(e) => {
//             props.dispatch(setTextFilter(e.target.value))
//         }} value={props.filters.text}/>
//         <select
//             value={props.filters.sortBy} 
//             onChange={(e) => {
//             e.target.value === "date" ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount())
//         }}>
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>


//     </div>
// )

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);