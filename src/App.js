import React, { useState } from 'react'
import NewExpense from './Components/NewExpense';
import Expenses from './Components/Expenses';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'id_1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'id_2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'id_3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'id_4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const saveDataHandler = (newData) => {
    setExpenses((lastState) => {
      return [...lastState, {...newData}]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddData={saveDataHandler} />
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
