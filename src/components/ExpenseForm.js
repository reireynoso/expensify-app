import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

// const date = new Date();
// const now = moment();
// console.log(now.format("MMM Do, YYYY"))

export default class ExpenseForm extends React.Component {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         description: props.expense ? props.expense.description : "",
    //         note: props.expense ? props.expense.note : "",
    //         amount: props.expense ? (props.expense.amount / 100).toString() : "",
    //         createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
    //         calendarFocused: false,
    //         error: ""
    //     }
    // }
    state = {
        description: this.props.expense ? this.props.expense.description : "",
        note: this.props.expense ? this.props.expense.note : "",
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : "",
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ""
    }

    onDescriptionChange = (e) => {
        const description  = e.target.value;
        this.setState(() => ({
            description
        }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        console.log(note)
        this.setState(() => ({
            note
        }))
    }

    amountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({
                createdAt
            }))
        }
    }

    onFocusChange = ({focused}) => {
        console.log(focused)
        this.setState(() => ({
            calendarFocused: focused
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({
                error: "Please provide description and amount"
            }))
        }
        else{
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            this.setState(() => ({
                error: "",
                description: "",
                amount: "",
                note: ""
            }))
        }
    }
    render(){
        // console.log(this.state)
        return (
            <div>
               {this.state.error ? <p>{this.state.error}</p> : null}
               <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        className="text-input"
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={this.amountChange}
                        value={this.state.amount}
                        className="text-input"
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
            
                    <textarea
                        placeholder="Add a note for your expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        className="text-area"
                    >
                    
                    </textarea>

                    <button>{this.props.expense ? "Edit" : "Add Expense"}</button>
               </form>
            </div>
        )
    }
}