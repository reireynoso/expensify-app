import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter} from '../actions/filters'
import {sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        console.log(calendarFocused)
        this.setState(() => ({
            calendarFocused
        }))
    }
    onSelectChange = (e) => {
        e.target.value === "date" ? this.props.sortByDate() : this.props.sortByAmount()
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    render(){
        return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                        type="text" 
                        className="text-input"
                        onChange={this.onTextChange} 
                        value={this.props.filters.text}
                        placeholder="Search Expenses"
                    />
                </div>
                <div className="input-group__item">
                    <select
                        className="select"
                        value={this.props.filters.sortBy} 
                        onChange={this.onSelectChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
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
            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);