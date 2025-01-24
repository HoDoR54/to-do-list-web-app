import React from "react";
import { useTodoListTContext } from "../context";

interface LeftItemsDisplayProps {
  todoList: string[];
  theme: boolean;
}

export const LeftItemsDisplay: React.FC<LeftItemsDisplayProps> = ({
  todoList,
  theme,
}) => {
  return (
    <p
      className={`cursor-pointer ${
        theme
          ? "hover:text-white text-gray-400"
          : "hover:text-black text-gray-700"
      }`}
    >
      {todoList.length} items left
    </p>
  );
};

interface DeleteAllProps {
  theme: boolean;
}

export const DeleteAll: React.FC<DeleteAllProps> = ({ theme }) => {
  const [_, setTodoList] = useTodoListTContext();

  const deleteAllTodo = () => {
    setTodoList([]);
    localStorage.setItem("to-do-list", JSON.stringify([]));
  };

  return (
    <p
      className={`cursor-pointer ${
        theme
          ? "hover:text-white text-gray-400"
          : "hover:text-black text-gray-700"
      }`}
      onClick={deleteAllTodo}
    >
      delete all
    </p>
  );
};
