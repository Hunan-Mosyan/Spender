// src/components/Expenses.js
import React, { useState, useEffect } from "react";
import { db } from '../../services/firebase/firebase';
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "expenses"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setExpenses(data);
    });
    return unsubscribe;
  }, []);

  const addExpense = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "expenses"), {
        description,
        amount: parseFloat(amount),
        date: new Date().toISOString(),
      });
      setDescription("");
      setAmount("");
    } catch (error) {
      console.error("Ошибка добавления:", error.message);
    }
  };

  return (
    <div>
      <h2>Ваши траты</h2>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Сумма"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - {expense.amount}₽
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
