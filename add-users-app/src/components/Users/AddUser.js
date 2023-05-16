import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const[error, setError] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if ( enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: 'Plase enter valid name and age (non-empty values)'
        })
        return;
    } else if ( enteredAge < 1 ) {
        setError({
            title: 'Invalid Age',
            message: 'Please enter valid age(>0)'
        })
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setAge("");
    setEnteredUsername("");
  };

  return (
    <div>
        {error && <ErrorModal errorHandler = {errorHandler} title = {error.title} message = {error.message}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
