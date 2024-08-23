import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length +1,
      title: input,
      amount: amount
    };
    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };
   
   const deleteExpense = (id)=>{
      setExpenses(expenses.filter((expenses)=> expenses.id !== id))
   }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input
          type="text"
          placeholder="expense"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className="expense-list"></ul>
      {
        expenses.map((expense)=>(
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
          </li>
        ))
      }
    </div>
  );
};

export default App;
