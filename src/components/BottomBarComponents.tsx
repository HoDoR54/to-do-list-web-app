import React from "react";
import { useTodoListTContext } from "../context";
import { TodoType } from "./AppContainer";
import { useThemeContext } from "../context";

interface LeftItemsDisplayProps {
  todoList: TodoType[];
}

export const LeftItemsDisplay: React.FC<LeftItemsDisplayProps> = ({
  todoList,
}) => {
  const [theme, _] = useThemeContext();
  return (
    <p
      className={`cursor-pointer ${
        theme
          ? "hover:text-white text-gray-400"
          : "hover:text-black text-gray-500"
      }`}
    >
      {todoList.length} items left
    </p>
  );
};

export const DeleteAll = () => {
  const [_, setTodoList] = useTodoListTContext();

  const deleteAllTodo = () => {
    setTodoList([]);
    localStorage.setItem("to-do-list", JSON.stringify([]));
  };
  const [theme, __] = useThemeContext();

  return (
    <p
      className={`cursor-pointer ${
        theme
          ? "hover:text-white text-gray-400"
          : "hover:text-black text-gray-500"
      }`}
      onClick={deleteAllTodo}
    >
      delete all
    </p>
  );
};
