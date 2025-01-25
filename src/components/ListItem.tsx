import React from "react";
import { TodoType } from "./AppContainer";
import { useThemeContext } from "../context";

interface ListItemProps {
  task: TodoType;
  index: number;
  deleteTodo: (index: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ task, index, deleteTodo }) => {
  const [theme, _] = useThemeContext();
  return (
    <li
      className={`relative px-5 py-2 rounded-md ${
        !theme ? "bg-white text-black shadow" : "bg-slate-800 text-white"
      }`}
    >
      {task.task}
      <span
        className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
        onClick={() => {
          deleteTodo(index);
        }}
      >
        X
      </span>
    </li>
  );
};

export default ListItem;
