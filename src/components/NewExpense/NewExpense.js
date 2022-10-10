import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveHandler = (expense) => {
    const expenses = {
      ...expense,
      id: Math.random().toString()
    };
    props.expenseHandler(expenses);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveHandler={saveHandler} />
    </div>
  );
};

export default NewExpense;
