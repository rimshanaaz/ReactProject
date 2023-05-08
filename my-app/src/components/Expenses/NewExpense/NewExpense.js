import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showWindow, setShowWindow] = useState(false);
    
    const windowShowHandler = ()=>{
        setShowWindow(true);
    }
    
    const saveExpenseDataHandler= (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onSaveExpense(expenseData);
        setShowWindow(false);
    }

    const windowHideHandler = () =>{
        setShowWindow(false);
    }
    return (
        <div className = "new-expense">
            
               {!showWindow && <button onClick = {windowShowHandler}>Add New Expense</button>}
                {showWindow && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {windowHideHandler}/>}
        </div>
    );

}

export default NewExpense;
