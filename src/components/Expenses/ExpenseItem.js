//import React, { Component } from "react";
import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //let title = "Car Insurancce";
  //March {props.date.toISOString()}

  // const [title, setTitle] = useState(props.title);
  // const [newtitle, setnewTitle] = useState("");
  // const clickHnadler = () => {
  //   // alert("Click");
  //   //setTitle("New Tittle..");
  //   setTitle(newtitle);
  // };

  // const chanheHandler = (e) => {
  //   setnewTitle(e.target.value);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/*<input type="text" value={newtitle} onChange={chanheHandler} />
    //   <button onClick={clickHnadler}>Change Title</button>
   */}
    </Card>
  );
};

export default ExpenseItem;

//<h2>This is a ExpenseItem</h2>
