import React from "react";
import "./NewExpenses.css";

import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    console.log("enterdExpenseData", enterdExpenseData);
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveEXpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
