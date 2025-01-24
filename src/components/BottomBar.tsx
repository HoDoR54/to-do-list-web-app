import React from "react";
import { DeleteAll, LeftItemsDisplay } from "./BottomBarComponents";
import ListFilter from "./ListFilter";

interface BottomBarProps {
  theme: boolean;
  todoList: string[];
}

const BottomBar: React.FC<BottomBarProps> = ({ theme, todoList }) => {
  return (
    <div
      className={`flex justify-between w-full px-5 py-2 rounded-md text-sm font-thin ${
        !theme ? "bg-white text-gray-900 shadow" : "bg-slate-800 text-gray-200"
      }`}
    >
      <LeftItemsDisplay theme={theme} todoList={todoList} />
      <ListFilter theme={theme} />
      <DeleteAll theme={theme} />
    </div>
  );
};

export default BottomBar;
