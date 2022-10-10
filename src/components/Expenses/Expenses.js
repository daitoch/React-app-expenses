import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2021");
  const selectFilterHandler = (selected) => {
    setFilter(selected);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filter}
        selectFilterHandler={selectFilterHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      {props.items
        .filter((item) => item.date.getFullYear().toString() === filter)
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
