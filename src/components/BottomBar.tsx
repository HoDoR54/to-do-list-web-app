import React from "react";
import { DeleteAll, LeftItemsDisplay } from "./BottomBarComponents";
import ListFilter from "./ListFilter";
import { TodoType } from "./AppContainer";
import { useThemeContext } from "../context";

interface BottomBarProps {
  todoList: TodoType[];
}

const BottomBar: React.FC<BottomBarProps> = ({ todoList }) => {
  const [theme, _] = useThemeContext();

  return (
    <div
      className={`flex justify-between w-full px-5 py-2 rounded-md text-sm font-thin ${
        !theme ? "bg-white text-gray-900 shadow" : "bg-slate-800 text-gray-200"
      }`}
    >
      <LeftItemsDisplay todoList={todoList} />
      <ListFilter />
      <DeleteAll />
    </div>
  );
};

export default BottomBar;
