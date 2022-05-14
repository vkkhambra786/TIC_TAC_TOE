import "./App.css";
import React from "react";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
//import NewExpenses from "./NewExpenses/NewExpense";
import NewExpenses from "./components/NewExpenses/NewExpense";
import { useState } from "react";

let DUMMY_expenses = [
  {
    id: "e1",
    title: "School Fee",
    amount: "400",
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: "500",
    date: new Date(2022, 6, 10),
  },
  {
    id: "e3",
    title: "house Resnt",
    amount: "700",
    date: new Date(2019, 2, 16),
  },
  {
    id: "e4",
    title: "food",
    amount: "900",
    date: new Date(2022, 3, 17),
  },
];
const App = (props) => {
  //let expenseDate = new Date(2022, 3, 20);

  //let expenseTitle = "School Fee";
  //let expenseAmount = 300;
  const [expenses, setExpenses] = useState(DUMMY_expenses);

  const AddExpenseHandler = (expense) => {
    console.log("expense", expense);

    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div className="App">
      <h1 className="firsth1"> Create a TODO LIST in React</h1>
      <h2 className="Fistrtcomp">Fisrt Componenent</h2>
      <NewExpenses onAddExpense={AddExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
