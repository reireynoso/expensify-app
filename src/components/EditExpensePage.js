import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(editExpense(props.expense.id, expense))
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push("/")
    }
    onClick = () => {
        // props.dispatch(startRemoveExpense(props.expense.id))
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push("/")
    }
    render(){
        return(
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button className="button button--secondary" onClick={this.onClick}>Remove Expense</button>
            </div>
        </div>
        )
    }
}
// const EditExpensePage = (props) => {
//     // console.log(props)
//     return (
//         <div>
//             <ExpenseForm
//                 onSubmit={(expense) => {
//                     console.log(expense)
//                     props.dispatch(editExpense(props.expense.id, expense))
//                     props.history.push("/")
//                 }}
//                 expense={props.expense}
//             />
//             <button onClick={() => {
//                 props.dispatch(startRemoveExpense(props.expense.id))
//                 props.history.push("/")
//             }}>Remove</button>
//         </div>
//     )
// }

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (expenseId, expense) => dispatch(startEditExpense(expenseId,expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)