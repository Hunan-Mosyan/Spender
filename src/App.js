// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from './components/auth/auth.js'
import Expenses from "./components/expenses/expenses.js";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  </Router>
);

export default App;
