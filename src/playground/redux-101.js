import {createStore} from 'redux';

const store = createStore((state= {count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        case "RESET":
            return {
                count: 0
            };
        default: 
            return state;
    }
})

// Actions - than an object that gets sent to the store

// increment the count

console.log(store.getState());

store.dispatch({
    type: "INCREMENT"
})

store.dispatch({
    type: "DECREMENT"
})


store.dispatch({
    type: "DECREMENT"
})

store.dispatch({
    type: "RESET"
})
console.log(store.getState());