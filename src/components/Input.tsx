import React, { useState } from "react";

interface InputProps {
  addTodo: (newTodo: string) => void;
  theme: boolean;
}

const Input: React.FC<InputProps> = ({ addTodo, theme }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmission = (e: any) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

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
