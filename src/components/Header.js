import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(null, mapDispatchToProps)(Header)