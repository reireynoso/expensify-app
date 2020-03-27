import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = (props) => {
    const {id, description, amount, createdAt} = props.expense
    return (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            props.dispatch(removeExpense(id))
        }}>Remove</button>
    </div>
    )
}

export default connect()(ExpenseListItem)