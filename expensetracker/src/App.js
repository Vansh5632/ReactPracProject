import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) {
      return;
    }
    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount
    }
    setExpenses([...expenses, newExpense])
    setInput('');
    setAmount('');
  }

  return (
    <div className='main'>
      <h2>Expense Tracker</h2>
      <div className='div1'>
        <input type="text" placeholder='Expense' value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
        <input type="number" placeholder='Amount' value={amount} onChange={(e) => {
          setAmount(e.target.value);
        }} />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul>
        {
          expenses.map((exp) => (
            <li key={exp.id}>
              {/* <span>{exp.id}</span> */}
              <span>{exp.title}</span>
              <span>{exp.amount}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
