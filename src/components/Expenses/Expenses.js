import ExpenseItem from "./ExpenseItem";
import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((valexpense) => (
        <ExpenseItem
          key={valexpense.id}
          date={valexpense.date}
          title={valexpense.title}
          amount={valexpense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;

/* 
      // <ExpenseItem
      //   date={props.item[1].date}
      //   title={props.item[1].title}
      //   amount={props.item[1].amount}
      // />{" "}
      // <ExpenseItem
      //   date={props.item[2].date}
      //   title={props.item[2].title}
      //   amount={props.item[2].amount}
      // />{" "}
      // <ExpenseItem
      //   date={props.item[3].date}
      //   title={props.item[3].title}
      //   amount={props.item[3].amount}
      // />{" "}

    */
