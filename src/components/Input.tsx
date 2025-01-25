import React, { useState } from "react";
import { TodoType } from "./AppContainer";
import { useThemeContext } from "../context";

interface InputProps {
  addTodo: (newTodo: TodoType) => void;
}

const Input: React.FC<InputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmission = (e: any) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo: TodoType = { task: inputValue, status: false };
      addTodo(newTodo);
      setInputValue("");
    }
  };

  const [theme, _] = useThemeContext();

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        className={`w-full px-5 py-2 rounded-md ${
          !theme ? "bg-white text-black" : "bg-slate-600 text-white"
        }`}
        placeholder="Add a new to-do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
