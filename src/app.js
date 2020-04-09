import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import {startSetExpenses} from './actions/expenses'
// import {setTextFilter} from './actions/filters'
// import visibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'

const store = configureStore();

// store.dispatch(addExpense({description: "water", amount: 800, createdAt: 14}))
// store.dispatch(addExpense({description: "gas", amount: 400, createdAt: 19}))
// store.dispatch(addExpense({description: "food", amount: 1400, createdAt: 10}))
// store.dispatch(setTextFilter("water"))
// console.log(store.getState().expenses, store.getState().filters)
// let result = visibleExpenses(store.getState().expenses, store.getState().filters)
// console.log(result);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(
            jsx, 
            document.getElementById("app")
        )
        hasRendered = true; 
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))



firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if(history.location.pathname === "/"){
                history.push('/dashboard')
            }
        })
    }else{
        renderApp()
        history.push('/')
    }
})
