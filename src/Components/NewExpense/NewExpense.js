import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => { // ovde očekujemo da bude objekat expenseData koji smo formirali u submit handler-u iz komponente ExpenseForm
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /* // sada prosleđujemo komponenti ExpenseForm samo pointer na ovu funkciju */ /> 
    </div>
}

export default NewExpense;