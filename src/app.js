import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import visibleExpenses from './selectors/expenses'

const store = configureStore();
store.dispatch(addExpense({description: "water", amount: 200}))
store.dispatch(addExpense({description: "gas", amount: 400}))
store.dispatch(setTextFilter("water"))
console.log(store.getState().expenses, store.getState().filters)
let result = visibleExpenses(store.getState().expenses, store.getState().filters)
console.log(result);

ReactDOM.render(
    <AppRouter/>, 
    document.getElementById("app")
)

