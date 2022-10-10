import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", Value: 0 },
    { label: "Feb", Value: 0 },
    { label: "Mar", Value: 0 },
    { label: "April", Value: 0 },
    { label: "May", Value: 0 },
    { label: "Jun", Value: 0 },
    { label: "July", Value: 0 },
    { label: "Aug", Value: 0 },
    { label: "Sept", Value: 0 },
    { label: "Oct", Value: 0 },
    { label: "Nov", Value: 0 },
    { label: "Dec", Value: 0 }
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].Value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
