import React from "react";
import { useThemeContext } from "../context";

const filters: string[] = ["all", "active", "completed"];

interface ListFilterProps {
  filterTodoList: (filterName: string) => void;
}

const ListFilter: React.FC<ListFilterProps> = ({ filterTodoList }) => {
  const [theme, _] = useThemeContext();

  return (
    <ul className="flex gap-5">
      {filters.map((filter, index) => (
        <li
          className={`cursor-pointer ${
            theme
              ? "hover:text-white text-gray-400"
              : "hover:text-black text-gray-500"
          }`}
          onClick={() => {
            filterTodoList(filter);
          }}
          key={index}
        >
          <span>{filter}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListFilter;
