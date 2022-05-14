import React from "react";
import "./Expenseform.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [entertitle, setenteredTitle] = useState("");
  const [enteramount, setenteredAmount] = useState("");
  const [enterdate, setenteredDate] = useState("");
  const titleChangeHandler = (e) => {
    //console.log(e.target.value);
    setenteredTitle(e.target.value);
  };
  const AmountChangeHandler = (e) => {
    //console.log(e.target.value);
    setenteredAmount(e.target.value);
  };
  const DateChangeHandler = (e) => {
    //console.log(e.target.value);
    setenteredDate(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const expensedata = {
      title: entertitle,
      amount: enteramount,
      date: new Date(enterdate),
    };

    console.log("expensedata", expensedata);
    props.onSaveEXpenseData(expensedata);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label style={{ fontWeight: "bold", marginLeft: "20px" }}>
            Title
          </label>
          <input
            style={{ padding: "8px", width: "250px", borderRadius: "5px" }}
            type="text"
            value={entertitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label
            style={{
              fontWeight: "bold",
              marginLeft: "50px",
            }}
          >
            Amount
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteramount}
            style={{ padding: "8px", width: "250px", borderRadius: "5px" }}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label style={{ fontWeight: "bold", marginLeft: "20px" }}>
            Title
          </label>
          <input
            style={{ padding: "8px", width: "250px", borderRadius: "5px" }}
            type="date"
            value={enterdate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
