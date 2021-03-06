import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => (
    <div>
        <h1>Header</h1>
        <NavLink to="/" activeClassName="is-active">DashBoard</NavLink>
        <NavLink to="/editExpense" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/addExpense" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
)
export default Header;
