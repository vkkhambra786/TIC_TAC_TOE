import "./ExpenseDate.css";
import React from "react";
const ExpenseDate = (props) => {
  const montn = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{montn}</div>
      <div className="expense-date__year">{year} </div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
