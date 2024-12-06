// src/components/Auth.js
import React, { useState } from "react";
import { auth } from '../../services/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Вы вошли в систему!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Регистрация прошла успешно!");
      }
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Войти" : "Зарегистрироваться"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Создать аккаунт" : "Уже есть аккаунт?"}
      </button>
    </div>
  );
};

export default Auth;
