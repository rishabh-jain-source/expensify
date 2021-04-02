import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'


const AddExpense = (props) => (
    <div>
        <h1>AddExpense</h1>
        <ExpenseForm onsubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        } }/>
    </div>
)
export default connect()(AddExpense)
    
