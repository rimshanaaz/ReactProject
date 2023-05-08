//component in react is just a javascript function!!!
// lowercase characters - builtin  html elements eg: <h1> <p>
// uppercase elements - custom elemnents mader by user <ExpenseItem>
//attributes are knownm as props (properties) in react

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
