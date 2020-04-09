import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(editExpense(props.expense.id, expense))
        this.props.editExpense(this.props.expense.id, expense)
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
            <ExpenseForm
                onSubmit={this.onSubmit}
                expense={this.props.expense}
            />
            <button onClick={this.onClick}>Remove</button>
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
        editExpense: (expenseId, expense) => dispatch(editExpense(expenseId,expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)