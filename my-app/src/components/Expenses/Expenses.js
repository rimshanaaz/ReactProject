import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [filter, setFilter] = useState("2020");
  const selectFilterHandler = (filter) => {
    setFilter(filter);
  };

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === filter
  );

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filter} onSelectFilter={selectFilterHandler} />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList filteredExpenses = {filteredExpenses}/>
        
      </Card>
    </div>
  );
}

export default Expenses;
