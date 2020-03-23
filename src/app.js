import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render(
    <p>This is my boiler</p>, 
    document.getElementById("app")
)

// const Layout = (props) => {
//     return(
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     )
// }

// <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
// ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))

// const template = <p>This JSX webpack</p>
// ReactDOM.render(template, document.getElementById('app'))

// import './utils';
// import subtract, {square, add} from './utils'
// console.log("new app!!")
// console.log(square(4))
// console.log(add(2,3))
// console.log(subtract(3,2))

// import isSenior, {isAdult, canDrink} from './person'

// console.log(isAdult(14))
// console.log(canDrink(21))
// console.log(isSenior(64));

// Importing NPM modules
// Install -> import -> use
// npm install validator