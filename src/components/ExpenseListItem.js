import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'
import EditExpense from './EditExpense'
import {Route} from 'react-router-dom'

const ExpenseListItem = ({ id,dispatch,description, amount, createdAt }) => (
    <div>
        <Link to={`/EditExpense/${id}`}>{description}</Link>
        <p>{amount}-{createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

const ConnectedExpenseListItem=connect()(ExpenseListItem)
export default ConnectedExpenseListItem
    
