import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'
const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <ConnectedExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
)
export default Dashboard
    