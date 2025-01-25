import { DeleteAll, LeftItemsDisplay } from "./BottomBarComponents";
import ListFilter from "./ListFilter";
import { useThemeContext } from "../context";
import React from "react";

interface BottomBarProps {
  filterTodoList: (filterName: string) => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ filterTodoList }) => {
  const [theme, _] = useThemeContext();

  return (
    <div
      className={`flex justify-between w-full px-5 py-2 rounded-md text-sm font-thin ${
        !theme ? "bg-white text-gray-900 shadow" : "bg-slate-800 text-gray-200"
      }`}
    >
      <LeftItemsDisplay />
      <ListFilter filterTodoList={filterTodoList} />
      <DeleteAll />
    </div>
  );
};

export default BottomBar;
