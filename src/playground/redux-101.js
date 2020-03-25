import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} ={}) => ({
    type: "INCREMENT",
    incrementBy
})

const decrementCount = ({decrementBy = 1} ={}) => ({
    type: "DECREMENT",
    decrementBy
})

const setCount = ({count}) => ({
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET"
})

// Reducers

const countReducer = (state= {count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            // const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            };
        default: 
            return state;
    }
}

const store = createStore(countReducer)

// Actions - than an object that gets sent to the store

// increment the count

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// })

store.dispatch(incrementCount({incrementBy: 20}))

// unsubscribe();

store.dispatch(decrementCount({decrementBy: 10}))
// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10
// })

store.dispatch(decrementCount())
// store.dispatch({
//     type: "DECREMENT"
// })

store.dispatch(resetCount())
store.dispatch(setCount({count: 101}))

// store.dispatch({
//     type: "RESET"
// })

// store.dispatch({
//     type: "SET",
//     count: 101
// })
